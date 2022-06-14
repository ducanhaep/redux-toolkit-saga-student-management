import cityApi from "api/cityApi";
import studentApi from "api/studentApi";
import { City, ListResponse, Student } from "models";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { dashboardActions } from "./dashboardSlice";

function* fetchStatistic() {
  const responseList: Array<ListResponse<Student>> = yield all([
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: "male" }),
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: "female" }),
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_gte: 8 }),
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_lte: 5 }),
  ]);

  const statisticList = responseList.map((item) => item.pagination._totalRows);
  console.log("statisticList " + statisticList);
  const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticList;

  yield put(dashboardActions.setStatistic({ maleCount, femaleCount, highMarkCount, lowMarkCount }));
}
function* fetchHighestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: "mark",
    _order: "desc",
  });

  yield put(dashboardActions.setHighestStudentList(data));
}
function* fetchLowestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: "mark",
    _order: "asc",
  });
  yield put(dashboardActions.setLowStudentList(data));
}
function* fetchRankingByCityList() {
  // Fetch city list
  const { data: cityList }: ListResponse<City> = yield call(cityApi.getAll);

  // Fetch ranking per city
  const callList = cityList.map(
    (item) =>
      yield call(studentApi.getAll, {
        _page: 1,
        _limit: 5,
        _sort: "mark",
        _order: "desc",
        city: item.code,
      })
  );
}
function* fetchDashboardData() {
  try {
    yield all([
      call(fetchStatistic),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList),
    ]);
  } catch (error) {
    console.log("Failed to fetch dashboard data", error);
  }
}
export default function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
}
