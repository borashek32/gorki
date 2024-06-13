import { RootState } from "../../../common/providers/model/store";

const selectChampions = (state: RootState) => state.champions.champions

export {
  selectChampions,
}