import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { MainTemplate } from '../../components/templates/main';
import { Post } from '../../components/organisms/feed';
import { POSTS } from '../../utils';

const MainScreen = () => {
    const renderItem = ({ item }: { item: any }) => {
        return (
            <Post
                message={item.message}
                image={item.image}
                likes={item.likes}
                author={item.author}
                create_at={item.create_at}
                location={item.location}
                status={item.status}
            />
        )
    }

    return (
        <MainTemplate>
            <FlatList
                style={{ borderWidth: 1, borderColor: 'pink' }}
                data={POSTS}
                keyExtractor={(item) => String(item.author.username)}
                contentContainerStyle={{ borderWidth: 1, borderColor: 'green' }}
                renderItem={renderItem}
            />
        </MainTemplate>
    )
}

export default MainScreen

const styles = StyleSheet.create({})