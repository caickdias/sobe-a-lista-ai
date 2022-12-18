import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LIST_COLLECTION = 'list';

const loadList = async () => {
    try {
        const list = await AsyncStorage.getItem(LIST_COLLECTION);
        return list ? JSON.parse(list) : [];
    } catch(error){
        console.log('[loadList] error', error);
    }
}

const setList = async (list) => {
    try {
        await AsyncStorage.setItem(LIST_COLLECTION, JSON.stringify(list));
    } catch (error) {
        console.log('[setList] error', error);
    }
}

export {
    loadList,
    setList,
}