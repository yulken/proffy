import React, { useState } from 'react';
import {View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favorites(){
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos"/>
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}>
                    {teachers.map((teacher: Teacher) =>{
                        return ( 
                            <TeacherItem 
                                key={teacher.id} 
                                teacher={teacher}
                                addedToFavorites={favorites.includes(teacher.id)}
                                />
                        )
                    })}
            </ScrollView>
        </View>
        
    )
}

export default Favorites;