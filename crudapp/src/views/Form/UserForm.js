import React, {useContext, useState} from 'react';
import {Text} from 'react-native'
import UsersContext from '../../context/UserContext';
import {Input, ScrollView, Button} from "./styles";


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
            <ScrollView>
                <Text>Nome:</Text>

                <Input
                    onChangeText={name => setUser({...user, name})}
                    placeholder="Informe o nome"
                    value={user.name}
                />
                <Text>Idade:</Text>

                <Input
                    onChangeText={age => setUser({...user, age})}
                    placeholder="Informe a idade"
                    value={user.age}
                />

                <Text>E-mail:</Text>

                <Input
                    onChangeText={email => setUser({...user, email})}
                    placeholder="Informe o e-mail"
                    value={user.email}
                />

                <Text>CPF:</Text>

                <Input
                    onChangeText={cpf => setUser({...user, cpf})}
                    placeholder="Informe o CPF "
                    value={user.cpf}
                />

                <Text>Avatar:</Text>

                <Input
                    onChangeText={avatar => setUser({...user, avatar})}
                    placeholder="Informe o link para o avatar"
                    value={user.avatarUrl}
                />

                <Text>Cep:</Text>

                <Input
                    onChangeText={texto => setCep(texto)}
                    onBlur={() => checkCEP(cep)} title="Buscar"
                    placeholder="000000-00"
                />
                <Text>Logradouro:</Text>

                <Input
                    onChangeText={logradouro => setUser({...user, logradouro})}
                    placeholder="Avenida Campo Bom"
                    value={user.logradouro}
                />

                <Text>Complemento:</Text>

                <Input
                    onChangeText={complemento => setUser({...user, complemento})}
                    placeholder="Lado par"
                    value={user.complemento}
                />

                <Text>Bairro:</Text>

                <Input
                    onChangeText={bairro => setUser({...user, bairro})}
                    placeholder="Bairro: Vila Prudente"
                    value={user.bairro}
                />

                <Text>Localidade:</Text>

                <Input
                    onChangeText={localidade => setUser({...user, localidade})}
                    placeholder="Localidade: São Paulo"
                    value={user.localidade}
                />

                <Text>UF:</Text>

                <Input
                    onChangeText={uf => setUser({...user, uf})}
                    placeholder="UF:SP"
                    value={user.uf}
                />
// implementação da estilização do Botão
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

