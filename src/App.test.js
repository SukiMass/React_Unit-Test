import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import React from 'react';
// import { describe } from 'node:test';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe('Headings and Screens Visible and Click test', () => {

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

  test('All,Recommended etc Click test', () => {
    render(<App />);

    const handleAllClickMock = jest.fn();
    const handleRecommendedClickMock = jest.fn();
    const handleAppliedClickMock = jest.fn();
    const handleSavedClickMock = jest.fn();

    const All = screen.getByText('All')
    const Recommended = screen.getByText('Recommended')
    const Applied = screen.getByText('Applied')
    const Saved = screen.getByText('Saved')

    All.onclick = handleAllClickMock;
    Recommended.onclick = handleRecommendedClickMock;
    Applied.onclick = handleAppliedClickMock;
    Saved.onclick = handleSavedClickMock;

    fireEvent.click(All)
    fireEvent.click(Recommended)
    fireEvent.click(Applied)
    fireEvent.click(Saved)

    expect(handleAllClickMock).toHaveBeenCalledTimes(1);
    expect(handleRecommendedClickMock).toHaveBeenCalledTimes(1);
    expect(handleAppliedClickMock).toHaveBeenCalledTimes(1);
    expect(handleSavedClickMock).toHaveBeenCalledTimes(1);
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

  test('Headings click test', () => {
    render(<App />);
    const handleHomeClickMock = jest.fn();
    const handleLearningClickMock = jest.fn();
    const handleCommunityClickMock = jest.fn();

    const Home = screen.getByText('All')
    const Learning = screen.getByText('Recommended')
    const Community = screen.getByText('Applied')

    Home.onclick = handleHomeClickMock;
    Learning.onclick = handleLearningClickMock;
    Community.onclick = handleCommunityClickMock;

    fireEvent.click(Home)
    fireEvent.click(Learning)
    fireEvent.click(Community)


    expect(handleHomeClickMock).toHaveBeenCalledTimes(1);
    expect(handleLearningClickMock).toHaveBeenCalledTimes(1);
    expect(handleCommunityClickMock).toHaveBeenCalledTimes(1);
  })




  test('Bell,Profile text visible test', () => {
    render(<App />);
    const Bell = screen.getByTestId('Bell')
    const ProfileName = screen.getByText('George Martin')
    expect(Bell).toBeInTheDocument();
    expect(ProfileName).toBeInTheDocument();
  })

  test('Bell Icon and profile text click test', () => {

    render(<App />)

    const handleIconClickMock = jest.fn();
    const handleProfileClickMock = jest.fn();

    const Bell = screen.getByTestId('Bell')
    const Profile = screen.getByTestId('Profile')

    Bell.onclick = handleIconClickMock
    Profile.onclick = handleProfileClickMock

    // Bell.addEventListener('click', handleIconClickMock);
    // Profile.addEventListener('click', handleProfileClickMock);
    fireEvent.click(Bell)
    fireEvent.click(Profile)

    expect(handleIconClickMock).toHaveBeenCalledTimes(1);
    expect(handleProfileClickMock).toHaveBeenCalledTimes(1);
  })

})

//  describe('Demo',()=>{
//   test('Demo',()=>{
//     render(<App/>)
//     const handleHomeClickMock = jest.fn();

//     const Home = screen.getByTestId('Home')

//     Home.onclick=handleHomeClickMock

//     fireEvent.click(Home)

//     expect(handleHomeClickMock).toHaveBeenCalledTimes(1);


//   })
// })

describe('SearchBar, Button visible and search-results test', () => {

  test('SearchBar, Button visible test', () => {
    render(<App />)

    const Search = screen.getByPlaceholderText('Seach Company, title')
    const SearchButton = screen.getByTestId('SearchButton')
    expect(Search).toBeInTheDocument();
    expect(SearchButton).toBeInTheDocument();
  })

  test('SearchBar Empty test', () => {
    render(<App />)
    const Search = screen.getByPlaceholderText('Seach Company, title')
    expect(Search.value).toBe('');

  })

  test('SearchBar Empty Error Test', () => {
    render(<App />)
    const Search = screen.getByPlaceholderText('Seach Company, title')
    const SearchButton = screen.getByTestId('SearchButton')

    const testValue = ''
    const error = screen.getByTestId('error')
    // const setState = jest.fn();
    // jest
    //   .spyOn(React, 'useState')
    //   .mockImplementationOnce(initState => ['true', setState]);

    fireEvent.change(Search, { target: { value: testValue } })
    fireEvent.click(SearchButton);
    // act(() => fireEvent.click(SearchButton));

    expect(Search.value).toBe('');
    expect(error).toBeVisible();
  })

  test('SearchBar Results Match Test', () => {
    render(<App/>)
    const SearchButton = screen.getByTestId('SearchButton')
    const Search = screen.getByPlaceholderText('Seach Company, title')
    const DataQualityManager = screen.getByTestId('DataQualityManager')
    const testValue = 'Data Quality Manager'

    fireEvent.change(Search,{target: {value: testValue}})
    fireEvent.click(screen.getByTestId('On-site'))
    fireEvent.click(SearchButton);
    expect(testValue).toHaveAttribute('data-testid','DataQualityManager');

  })

  test('Error Message should not be visible', () => {
    
    render(<App/>)
    const SearchButton = screen.getByTestId('SearchButton')
    const Search = screen.getByPlaceholderText('Seach Company, title')
    const testValue = 'test'
    const error = screen.getByTestId('error')

    fireEvent.change(Search,{target: {value: testValue}})

    fireEvent.click(SearchButton);

    expect(error).not.toBeVisible();
  })

})



// test('checkbox click test', () => {
//   render(<App />)  
//   fireEvent.click(screen.getByRole('box'))
//   expect(screen.getByLabelText('Check'))
//   expect(screen.getByLabelText('Check')).toBeChecked()
// })


//  ****************** Select Boxes test ***************************
describe.skip('Select Boxes test', () => {
  test('', () => {
    render(<App />)
    const Skills = screen.getByText('Skills')
  })
})

//  ****************** Checkbox click test ***************************
describe('Checkboxes click test', () => {

  //  ****************** Work Place Checkbox click test ***************************
  describe('Work Place Type Checkbox click test', () => {

    test('Hybrid checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('Hybrid'))
      expect(screen.getByTestId('Hybrid')).toBeInTheDocument();
      expect(screen.getByTestId('Hybrid')).toBeChecked()
    })

    test('On-site checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('On-site'))
      expect(screen.getByTestId('On-site'))
      expect(screen.getByTestId('On-site')).toBeChecked()
    })

    test('Remote checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('Remote'))
      expect(screen.getByTestId('Remote'))
      expect(screen.getByTestId('Remote')).toBeChecked()
    })

  })

  //  ****************** Job Type Checkbox click test ***********************
  describe('Job Type Checkbox click test', () => {

    test('Contract checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('Contract'))
      expect(screen.getByTestId('Contract'))
      expect(screen.getByTestId('Contract')).toBeChecked()
    })

    test('Part-time checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('Part-time'))
      expect(screen.getByTestId('Part-time'))
      expect(screen.getByTestId('Part-time')).toBeChecked()
    })

    test('Full-time checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('Full-time'))
      expect(screen.getByTestId('Full-time'))
      expect(screen.getByTestId('Full-time')).toBeChecked()
    })

    test('Volunteer checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('Volunteer'))
      expect(screen.getByTestId('Volunteer'))
      expect(screen.getByTestId('Volunteer')).toBeChecked()
    })

    test('Other checkbox click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('Other'))
      expect(screen.getByTestId('Other'))
      expect(screen.getByTestId('Other')).toBeChecked()
    })
  })


  //  ****************** Schedule Checkbox click test ***********************

  describe('Schedule Checkbox click test', () => {

    test('Fixed click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('Fixed'))
      expect(screen.getByTestId('Fixed'))
      expect(screen.getByTestId('Fixed')).toBeChecked()
    })

    test('Flexible click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('Flexible'))
      expect(screen.getByTestId('Flexible'))
      expect(screen.getByTestId('Flexible')).toBeChecked()
    })

    test('WeekendOnly click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('WeekendOnly'))
      expect(screen.getByTestId('WeekendOnly'))
      expect(screen.getByTestId('WeekendOnly')).toBeChecked()
    })

    test('MondaytoFriday click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('MondaytoFriday'))
      expect(screen.getByTestId('MondaytoFriday'))
      expect(screen.getByTestId('MondaytoFriday')).toBeChecked()
    })

    test('UStime click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('UStime'))
      expect(screen.getByTestId('UStime'))
      expect(screen.getByTestId('UStime')).toBeChecked()
    })

    test('Indiatime click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('Indiatime'))
      expect(screen.getByTestId('Indiatime'))
      expect(screen.getByTestId('Indiatime')).toBeChecked()
    })

    test('ScheduleOther click test', () => {
      render(<App />)
      fireEvent.click(screen.getByTestId('ScheduleOther'))
      expect(screen.getByTestId('ScheduleOther'))
      expect(screen.getByTestId('ScheduleOther')).toBeChecked()
    })

  })
})