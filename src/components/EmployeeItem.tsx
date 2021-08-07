import React from 'react'; //8.3K (gzipped: 3.3K)
import {IonItem, IonAvatar, IonLabel} from '@ionic/react'
import {Person} from './../models/person.model'
const EmployeeItem: React.FC<{person: Person}> = ({person})=>{
    return (
        <IonItem>
            <IonAvatar slot="start"></IonAvatar>
            <img src={person.photo}></img>
            <IonLabel>
                <h2>{person.name}</h2>
                <p>{person.position}</p>
            </IonLabel>
        </IonItem>
    );
}

export default EmployeeItem;