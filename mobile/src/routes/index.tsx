import React, { useContext, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store';

// Contexts e API//
import AuthContext from './../contexts/auth'
import api from '../services/api'


// Routes //
import AuthRoutes from './AuthRoutes'
import AppStack from './AppStack'

const Routes: React.FC = () => {

    const context = useContext(AuthContext)

    // Verifica se o usuário possui o token válido, se não tiver, rediriciona-o para tela de Login //
    useEffect(() => {
        async function validation() {

            const storage = await SecureStore.getItemAsync('proffyUser') as string
            const userData = JSON.parse(storage)

            api.post('/validate-token', userData)
                .then(res => {
                    if (res.data) {
                        context.signIn(userData)
                    } else {
                        context.signIn(null)
                        SecureStore.deleteItemAsync('proffyUser')
                    }
                }).catch(e => alert(e))
        }

        validation()
    }, [])

    return context.signed ? <AppStack></AppStack> : <AuthRoutes />
}

export default Routes;