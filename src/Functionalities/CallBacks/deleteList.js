import deleteListMethod from '../Taskmethods/deleteList'
import localStorageList from '../LocalStorage/localStorageList'

function deleteList() {

    deleteListMethod();
    localStorageList();

}

export default deleteList