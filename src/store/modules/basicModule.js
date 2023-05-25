import { ref, set } from "firebase/database";
import { database } from "@/firebase";

// 定义状态对象
const state = {
  basicData: 'basicData',
};

// 定义 getters 对象
const getters = {
};

// 定义 actions 对象
const actions = {
  setFireBase() {
    let basicData = state.basicData;
    set(ref(database, basicData), {
      username: basicData,
      // email: email,
      // profile_picture: imageUrl
    }).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });

  },
};

// 定义 mutations 对象
const mutations = {
};

export default {
  state,
  getters,
  actions,
  mutations,
}
