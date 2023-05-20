import { createSlice } from '@reduxjs/toolkit';

import { endpoints } from '../../services/apis/RoleService';

const initialState = {
  roleList:[],
  taskList:[],
  roleTaskList:[],
  roleTaskListIds:[],
  dynamicTaskList:[]

};

const RoleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(endpoints.getAllRoles.matchFulfilled, (state, action) => {
      state.roleList = action?.payload?.roleList;
    });
    builder.addMatcher(endpoints.getAllTasks.matchFulfilled, (state, action) => {
      state.taskList = action?.payload?.taskList;
    });
    builder.addMatcher(endpoints.getTaskToRole.matchFulfilled, (state, action) => {
      state.roleTaskList = action?.payload?.taskList;
      state.roleTaskListIds = action?.payload?.taskList.map(item=>item.taskId)
      state.dynamicTaskList = action?.payload?.taskList.map(item=>item.taskId)

    });
  },

});

export default RoleSlice.reducer;
