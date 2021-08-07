import React, {useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { Person } from './../models/person.model'
import EmployeeItem from './../components/EmployeeItem';
const Tab2: React.FC = () => {

  const [people, setPeople] = useState<Person[]>([]);

  useIonViewDidEnter(async () => {
    const result = await fetch('https://uifaces.co/api?limit=25' ,{
      headers: { 'X-API-KEY': 'E3C38FD1-21304587-953BDD46-2488D357'}
    });
    const data = await result.json();
    setPeople(data);
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonList>
          {people.map((person, idx) => <EmployeeItem key={idx} person={person}/>)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
