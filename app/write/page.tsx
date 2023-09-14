import MDEditor from "../components/MDEditor";
import dynamic from 'next/dynamic';
//import LoginForm from '../components/LoginForm';

const DynamicComponent = dynamic(() => import('../components/MDEditor'), {
  ssr: false, // Set to false to disable server-side rendering
});

export default function WriteNewPost() {
    return (<DynamicComponent></DynamicComponent>);
  }