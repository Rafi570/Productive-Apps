import Swal from "sweetalert2";
// const Swal = require("sweetalert2");

const getStoreDb = () => {
  const storeAppStr = localStorage.getItem("appList");
  if (storeAppStr) {
    const storeAppData = JSON.parse(storeAppStr);
    return storeAppData;
  } else {
    return [];
  }
};

const addToStore = (id) => {
  const storeData = getStoreDb();
  if (storeData.includes(id)) {
    Swal.fire({
      icon: "error",
      title: "Already Installed",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else {
    storeData.push(id);
    const data = JSON.stringify(storeData);
    localStorage.setItem("appList", data);
    Swal.fire({
  title: "Install Success",
  icon: "success",
  draggable: true
});
  }
};
const installBtn = (id) => {
  const storeData = getStoreDb();
  if (storeData.includes(id)) {
    return true;
  } else {
    return false;
  }
};
const removeLocalData = (id) => {
  const storeData = getStoreDb();
  const updatedData = storeData.filter((item) => item !== id);
  localStorage.setItem("appList", JSON.stringify(updatedData));
};
export { addToStore, getStoreDb, installBtn, removeLocalData };
