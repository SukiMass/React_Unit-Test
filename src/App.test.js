import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import userEvent from '@testing-library/user-event';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('All,Recommended etc visible test',()=>{
  render(<App/>);
  const All = screen.getByText('All')
  const Recommended = screen.getByText('Recommended')
  const Applied = screen.getByText('Applied')
  const Saved = screen.getByText('Saved')

  expect(All).toBeInTheDocument();
  expect(Recommended).toBeInTheDocument();
  expect(Applied).toBeInTheDocument();
  expect(Saved).toBeInTheDocument();
})

test('Headings visible test',()=>{
  render(<App/>);
  const Home = screen.getByText('Home')
  const Learning = screen.getByText('Learning')
  const Community = screen.getByText('Community')
  
  expect(Home).toBeInTheDocument();
  expect(Learning).toBeInTheDocument();
  expect(Community).toBeInTheDocument();
})

// test('usermame visible test',()=>{
//   render(<App/>);
//   expect(screen.getByPlaceholderText('username')).toHaveValue('')
// })

test('Bell,Profile text visible test',()=>{
  render(<App/>);
  const Bell = screen.getByRole('Bell')
  // const username = screen.getByRole('usernam')
  const ProfileName = screen.getByText('George Martin')
  // expect(username).toBeInTheDocument()
  expect(Bell).toBeInTheDocument();
  expect(ProfileName).toBeInTheDocument();
})

test('Bell Icon and profile text click test', async()=>{

  const handleClick = jest.fn(); 
  render(<App click={handleClick}/>)
  fireEvent.click(screen.getByRole('Bell'))
  
  expect(handleClick).toHaveBeenCalledTimes(1);
  // expect(ProfileName).toBeInTheDocument();
})

test('handles click correctly',  () => {
  render(<App/>)
  fireEvent.click(screen.getByRole('box'))
  expect(screen.getByLabelText('Check')).toBeChecked()
})
