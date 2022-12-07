import * as React from 'react';
import { MainLayout } from '../components/layout';

export interface IAboutProps {
}

export default function About (props: IAboutProps) {
  return (
    <>
      <h1>About Page</h1>
    </>
  );
}

About.Layout = MainLayout;