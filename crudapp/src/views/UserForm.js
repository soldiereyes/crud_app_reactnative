import React, {useContext, useState} from 'react';
import {Text, TextInput, StyleSheet, ScrollView} from 'react-native'
import {Button} from 'react-native-elements';
import UsersContext from '../context/UserContext';



export default ({route, navigation}) => {
    function checkCEP(cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
            .then(data => {
                setLogradouro(data);
            });
    }

    const [user, setUser] = useState(route.params ? route.params : {});
    const {dispatch} = useContext(UsersContext);
    const [cep, setCep] = useState();
    const [logradouro, setLogradouro] = useState();



    return (
        <>
            <ScrollView style={style.form}>
                <Text>Nome:</Text>

                <TextInput
                    style={style.input}
                    onChangeText={name => setUser({...user, name})}
                    placeholder="Informe o nome"
                    value={user.name}
                />
                <Text>Idade:</Text>

                <TextInput
                    style={style.input}
                    onChangeText={age => setUser({...user, age})}
                    placeholder="Informe a idade"
                    value={user.age}
                />

                <Text>E-mail:</Text>

                <TextInput
                    style={style.input}
                    onChangeText={email => setUser({...user, email})}
                    placeholder="Informe o e-mail"
                    value={user.email}
                />

                <Text>CPF:</Text>

                <TextInput
                    style={style.input}
                    onChangeText={cpf => setUser({...user, cpf})}
                    placeholder="Informe o CPF "
                    value={user.cpf}
                />

                <Text>Avatar:</Text>

                <TextInput
                    style={style.input}
                    onChangeText={avatar => setUser({...user, avatar})}
                    placeholder="Informe o link para o avatar"
                    value={user.avatarUrl}
                />

                <Text>Cep:</Text>

                <TextInput
                    style={style.input}
                    onChangeText={texto => setCep(texto)}
                    onBlur={() => checkCEP(cep)} title="Buscar"
                    placeholder="000000-00"
                />
                <Text>Logradouro:</Text>
                <TextInput
                    style={style.input}
                    onChangeText={logradouro => setUser({...user, logradouro})}
                    placeholder="Avenida Campo Bom"
                    value={user.logradouro }
                />

                <Text>Complemento:</Text>

                <TextInput
                    style={style.input}
                    onChangeText={complemento => setUser({...user, complemento})}
                    placeholder="Lado par"
                    value={user.complemento}
                />

                <Text>Bairro:</Text>

                <TextInput
                    style={style.input}
                    onChangeText={bairro => setUser({...user, bairro})}
                    placeholder="Bairro: Vila Prudente"
                    value={user.bairro}
                />

                <Text>Localidade:</Text>

                <TextInput
                    style={style.input}
                    onChangeText={localidade => setUser({...user, localidade})}
                    placeholder="Localidade: São Paulo"
                    value={user.localidade}
                />

                <Text>UF:</Text>

                <TextInput
                    style={style.input}
                    onChangeText={uf => setUser({...user, uf})}
                    placeholder="UF:SP"
                    value={user.uf}
                />

                <Button title="Salvar"
                        onPress={() => {
                            dispatch({
                                type: user.id ? 'updateUser' : 'createUser',
                                payload: user
                            })
                            navigation.navigate('UserList')
                        }}/>
            </ScrollView>
        </>
    )
};


const style = StyleSheet.create({
    buttonSearch: {
        color: 'white',
    },
    form: {
        padding: 12,

    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        marginBottom: 10,
        padding: 10
    }
});
