import React from 'react';
import { StyleSheet } from 'react-native';
import { MainTemplate } from '../../components/templates/main';
import { Post } from '../../components/organisms/feed';
import { ScrollView } from 'react-native-gesture-handler';

const MainScreen = () => {
    return (
        <MainTemplate>
            <ScrollView>

                <Post
                    message="Hello, how are you?"
                    likes={[
                        {
                            username: 'ddasilva',
                            name: 'Daniela',
                            surname: 'Da Silva',
                        },
                        {
                            username: 'fdasilva',
                            name: 'Fabiana',
                            surname: 'Da Silva',
                        },
                        {
                            username: 'adasilvapdev',
                            name: 'Andrea',
                            surname: 'Da Silva',
                        },
                    ]}
                    author={{
                        username: 'fdasilva',
                        name: 'Fabiana',
                        surname: 'Da Silva',
                    }}
                    create_at={new Date()}
                    location={'Trigal'}
                    status={'published'}
                />
                <Post
                    message={' It is a long established fact that a reader will be \n' + 'distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of'}
                    author={{
                        username: 'adasilvapdev',
                        name: 'Andrea',
                        surname: 'Da Silva',
                    }}
                    create_at={new Date()}
                    location={'Valencia'}
                    status={'drafted'}
                    image={require('../../../assets/images/avatars/6.jpg')}
                />

            </ScrollView>
        </MainTemplate>
    )
}

export default MainScreen

const styles = StyleSheet.create({})