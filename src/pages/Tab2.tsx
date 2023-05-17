import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab2.css';
import AuthorList from "../components/AuthorList";
import {useState} from "react";

const Tab2: React.FC = () => {
    const [reload, setReload] = useState(false);

    const handleReload = () => {
        setReload(!reload);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle color={"primary"}>Library Authors</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <AuthorList key={reload ? 'reload' : 'no-reload'}/>
            </IonContent>
            <IonButton color="secondary" onClick={handleReload}>Reload Authors - Cache first</IonButton>
        </IonPage>
    );
};

export default Tab2;
