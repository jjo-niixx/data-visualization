const actions = {
  SET_DATA: "SET_DATA",

  setData: (data) => ({
    type: actions.SET_DATA,
    data,
  }),
};

export default actions;
