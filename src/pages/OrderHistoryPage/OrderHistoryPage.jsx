import * as usersService from '../../utilities/users-service';

function OrderHistoryPage(){

    async function _handleCheckToken(){
        let expDate = await usersService.checkToken()
    }

    return (
        <>
            <h1>OrderHistoryPage</h1>
            <button onClick={_handleCheckToken}>Check when my login expires</button>
        </>
    )
}

export default OrderHistoryPage;