import type { StreetType } from '@/models/models.type';
import { ref } from 'vue';

const getStreets = () => {
  const streets = ref<StreetType[]>([
    {
      name: 'Asbronstraat',
      numbers: ['1', '2']
    },
    {
      name: 'Hagelandstraat',
      numbers: ['2', '4', '4b']
    }
  ]);
  return { streets };
};

export { getStreets };
