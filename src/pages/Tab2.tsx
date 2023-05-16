import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab2.css';
import AuthorList from "../components/AuthorList";

const Tab2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle color={"primary"}>Library Authors</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <AuthorList/>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
