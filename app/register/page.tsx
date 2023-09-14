import dynamic from 'next/dynamic';
//import LoginForm from '../components/LoginForm';

const DynamicComponent = dynamic(() => import('../components/RegisterForm'), {
  ssr: false, // Set to false to disable server-side rendering
});
export default function Home() {
  return (
  <div>
    <DynamicComponent></DynamicComponent>
  </div>
  )
}
