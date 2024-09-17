import {ref} from 'vue'
import {getStreets} from '@/service/StreetsData.service'
const {streets} = getStreets()


const newStreet = ref('');


const adressManager = () => {
  const addStreet = (): void => {
    if (newStreet.value) {
      streets.value.push({
        name: newStreet.value,
        numbers: []
      })
      newStreet.value = ''
    }
  }
  return {addStreet,newStreet,streets}
}

export { adressManager }
