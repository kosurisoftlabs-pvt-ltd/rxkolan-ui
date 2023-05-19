import api from '../api';

export const roleApi = api.injectEndpoints({
  endpoints: (build) => ({
    addRoles: build.mutation({
      query: (payload) => ({
        url: 'role/add',
        method: 'POST',
        body: payload,
      }),
    }),

    addTask: build.mutation({
      query: (payload) => ({
        url: 'task/add',
        method: 'POST',
        body: payload,
      }),
    }),

    getAllRoles: build.query({
        query: () => ({
          url: `role/getAll`,
          method:"GET"
        }),
      }),

      getAllTasks: build.query({
        query: () => ({
          url: `task/getAll`,
          method:"GET"
        }),
      }),

      mapTaskToRole: build.mutation({
        query: (payload) => ({
          url: 'task/map',
          method: 'POST',
          body: payload,
        }),
      }),

      getTaskToRole: build.mutation({
        query: (payload) => ({
          url: 'role/getTasks',
          method: 'POST',
          body: payload,
        }),
      }),
  }),
});

export const {
useAddRolesMutation,
useLazyGetAllRolesQuery,
useLazyGetAllTasksQuery,
useAddTaskMutation,
useMapTaskToRoleMutation,
useGetTaskToRoleMutation,
} = roleApi;

export const { endpoints } = roleApi;
