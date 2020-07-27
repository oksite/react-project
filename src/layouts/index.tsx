import { IRouteComponentProps } from 'umi';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  // if (route.pathname === '/login') {
  //   return <SimpleLayout>{ props.children }</SimpleLayout>
  // }
  return children;
}
