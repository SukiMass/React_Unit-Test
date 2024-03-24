import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import userEvent from '@testing-library/user-event';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('All,Recommended etc visible test', () => {
  render(<App />);
  const All = screen.getByText('All')
  const Recommended = screen.getByText('Recommended')
  const Applied = screen.getByText('Applied')
  const Saved = screen.getByText('Saved')

  expect(All).toBeInTheDocument();
  expect(Recommended).toBeInTheDocument();
  expect(Applied).toBeInTheDocument();
  expect(Saved).toBeInTheDocument();
})

test('Headings visible test', () => {
  render(<App />);
  const Home = screen.getByText('Home')
  const Learning = screen.getByText('Learning')
  const Community = screen.getByText('Community')

  expect(Home).toBeInTheDocument();
  expect(Learning).toBeInTheDocument();
  expect(Community).toBeInTheDocument();
})

test('Bell,Profile text visible test', () => {
  render(<App />);
  const Bell = screen.getByRole('Bell')
  const ProfileName = screen.getByText('George Martin')
  expect(Bell).toBeInTheDocument();
  expect(ProfileName).toBeInTheDocument();
})

test('Bell Icon and profile text click test', () => {

  render(<App />)

  const handleIconClickMock = jest.fn();
  const handleProfileClickMock = jest.fn();

  screen.getByRole('Bell').onclick = handleIconClickMock
  screen.getByRole('Profile').onclick = handleProfileClickMock

  const Bell = screen.getByRole('Bell')
  const Profile = screen.getByRole('Profile')

  // Bell.addEventListener('click', handleIconClickMock);
  // Profile.addEventListener('click', handleProfileClickMock);
  fireEvent.click(Bell)
  fireEvent.click(Profile)
  expect(handleIconClickMock).toHaveBeenCalledTimes(1);
  expect(handleProfileClickMock).toHaveBeenCalledTimes(1);
})

test('checkbox click test', () => {
  render(<App />)
  fireEvent.click(screen.getByRole('box'))
  expect(screen.getByLabelText('Check'))
  expect(screen.getByLabelText('Check')).toBeChecked()
})


//  ****************** Select Boxes test ***************************
describe('Select Boxes test', () => { 
    test('',()=>{
      render(<App/>)

      const Skills = screen.getByText('Skills')

    })
 })

//  ****************** Checkbox click test ***************************
describe('Checkboxes click test', () => {

  //  ****************** Work Place Checkbox click test ***************************
  describe('Work Place Type Checkbox click test', () => {

    test('Hybrid checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('Hybrid'))
      expect(screen.getByRole('Hybrid'))
      expect(screen.getByRole('Hybrid')).toBeChecked()
    })

    test('On-site checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('On-site'))
      expect(screen.getByRole('On-site'))
      expect(screen.getByRole('On-site')).toBeChecked()
    })

    test('Remote checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('Remote'))
      expect(screen.getByRole('Remote'))
      expect(screen.getByRole('Remote')).toBeChecked()
    })

  })

  //  ****************** Job Type Checkbox click test ***********************
  describe('Job Type Checkbox click test', () => {

    test('Contract checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('Contract'))
      expect(screen.getByRole('Contract'))
      expect(screen.getByRole('Contract')).toBeChecked()
    })

    test('Part-time checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('Part-time'))
      expect(screen.getByRole('Part-time'))
      expect(screen.getByRole('Part-time')).toBeChecked()
    })

    test('Full-time checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('Full-time'))
      expect(screen.getByRole('Full-time'))
      expect(screen.getByRole('Full-time')).toBeChecked()
    })

    test('Volunteer checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('Volunteer'))
      expect(screen.getByRole('Volunteer'))
      expect(screen.getByRole('Volunteer')).toBeChecked()
    })

    test('Other checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('Other'))
      expect(screen.getByRole('Other'))
      expect(screen.getByRole('Other')).toBeChecked()
    })
  })


  //  ****************** Schedule Checkbox click test ***********************

  describe('Schedule Checkbox click test', () => {

    test('Fixed click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('Fixed'))
      expect(screen.getByRole('Fixed'))
      expect(screen.getByRole('Fixed')).toBeChecked()
    })

    test('Flexible click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('Flexible'))
      expect(screen.getByRole('Flexible'))
      expect(screen.getByRole('Flexible')).toBeChecked()
    })

    test('WeekendOnly click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('WeekendOnly'))
      expect(screen.getByRole('WeekendOnly'))
      expect(screen.getByRole('WeekendOnly')).toBeChecked()
    })

    test('MondaytoFriday click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('MondaytoFriday'))
      expect(screen.getByRole('MondaytoFriday'))
      expect(screen.getByRole('MondaytoFriday')).toBeChecked()
    })

    test('UStime click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('UStime'))
      expect(screen.getByRole('UStime'))
      expect(screen.getByRole('UStime')).toBeChecked()
    })

    test('Indiatime click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('Indiatime'))
      expect(screen.getByRole('Indiatime'))
      expect(screen.getByRole('Indiatime')).toBeChecked()
    })

    test('ScheduleOther click test', () => {
      render(<App />)
      fireEvent.click(screen.getByRole('ScheduleOther'))
      expect(screen.getByRole('ScheduleOther'))
      expect(screen.getByRole('ScheduleOther')).toBeChecked()
    })

  })
})

test('Search visible and search-results test',()=>{
  render(<App/>)
  
})