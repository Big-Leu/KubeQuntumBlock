import { create } from 'zustand';

export const FormStore = create((set) => ({
  isVisible: false,
  toggleVisibility: () => set((state: any) => ({ isVisible: !state.isVisible })),
  
  podsData: [],
  EndData: [],
  fetchPodsData: async () => {
    try {
      const response = await fetch('http://localhost:8080/getPods', {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch pods data');
      }

      const data = await response.json();
      console.log('Inside the store, the data is:', data);
      const podsList = data.map((pod: any) => ({
        podName: pod.name,
        containerName: pod.containers?.[0]?.name || 'No container', 
      }));
      console.log(podsList)
      set({ podsData: podsList });
    } catch (error) {
      console.error('Error fetching pods data:', error);
    }
  },
  fetchEndData: async () => {
    try {
      const response = await fetch('http://localhost:8080/getEndpoints', {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch pods data');
      }

      const data = await response.json();
      console.log('Inside the store, the data is:', data);
      const podsList2 = data.map((pod: any) => ({
        EndpointType: pod.endpointtype,
        EndpointName: pod.endpointname, 
      }));
      console.log(podsList2)
      set({ EndData: podsList2 });
    } catch (error) {
      console.error('Error fetching pods data:', error);
    }
  },
}));
