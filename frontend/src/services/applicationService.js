// import api from './api';

// export const applicationService = {
//   // Public - Submit application
//   submitApplication: async (applicationData) => {
//     const response = await api.post('/applications', applicationData);
//     return response.data;
//   },

//   // Admin - Get all applications
//   getApplications: async (params = {}) => {
//     const response = await api.get('/applications', { params });
//     return response.data;
//   },

//   // Admin - Get single application
//   getApplication: async (id) => {
//     const response = await api.get(`/applications/${id}`);  // Fixed
//     return response.data;
//   },

//   // Admin - Update application
//   updateApplication: async (id, data) => {
//     const response = await api.put(`/applications/${id}`, data);  // Fixed
//     return response.data;
//   },

//   // Admin - Delete application
//   deleteApplication: async (id) => {
//     const response = await api.delete(`/applications/${id}`);  // Fixed
//     return response.data;
//   },

//   // Admin - Get statistics
//   getStats: async () => {
//     const response = await api.get('/applications/stats');
//     return response.data;
//   }
// };

import api from './api';

export const applicationService = {
  // Public - Submit general application
  submitGeneralApplication: async (applicationData) => {
    const response = await api.post('/applications/submit-general', applicationData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

submitDriverApplication: async (applicationData) => {
    const response = await api.post('/applications/submit-driver', applicationData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  // Admin - Get all applications
  getApplications: async (params = {}) => {
    const response = await api.get('/applications', { params });
    return response.data;
  },

  // Admin - Get single application
  getApplication: async (id) => {
    const response = await api.get(`/applications/${id}`);
    return response.data;
  },

  // Admin - Update application
  updateApplication: async (id, data) => {
    const response = await api.put(`/applications/${id}`, data);
    return response.data;
  },

  // Admin - Delete application
  deleteApplication: async (id) => {
    const response = await api.delete(`/applications/${id}`);
    return response.data;
  },

  // Admin - Get statistics
  getStats: async () => {
    const response = await api.get('/applications/stats');
    return response.data;
  }
};
