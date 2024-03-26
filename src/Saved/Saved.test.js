import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Saved from './Saved';
import React from 'react';


// import { describe } from 'node:test';

// test('renders learn react link', () => {
//   render(<Saved/>);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe('Headings and Screens Visible and Click test', () => {

  test('All,Recommended etc visible test', () => {
    render(<Saved/>);
    const All = screen.queryByTestId('All')
    const Recommended1 = screen.queryByTestId('Recommended')
    const Applied1 = screen.queryByTestId('Applied')
    const Saved1 = screen.queryByTestId('Saved')

    expect(All).toBeInTheDocument();
    expect(Recommended1).toBeInTheDocument();
    expect(Applied1).toBeInTheDocument();
    expect(Saved1).toBeInTheDocument();
  })

  test('All,Recommended etc Click test', () => {
    render(<Saved/>);

    const handleAllClickMock = jest.fn();
    const handleRecommendedClickMock = jest.fn();
    const handleAppliedClickMock = jest.fn();
    const handleSavedClickMock = jest.fn();

    const All = screen.queryByTestId('All')
    const Recommended1 = screen.queryByTestId('Recommended')
    const Applied1 = screen.queryByTestId('Applied')
    const Saved1 = screen.queryByTestId('Saved')

    All.onclick = handleAllClickMock;
    Recommended1.onclick = handleRecommendedClickMock;
    Applied1.onclick = handleAppliedClickMock;
    Saved1.onclick = handleSavedClickMock;

    fireEvent.click(All)
    fireEvent.click(Recommended1)
    fireEvent.click(Applied1)
    fireEvent.click(Saved1)

    expect(handleAllClickMock).toHaveBeenCalledTimes(1);
    expect(handleRecommendedClickMock).toHaveBeenCalledTimes(1);
    expect(handleAppliedClickMock).toHaveBeenCalledTimes(1);
    expect(handleSavedClickMock).toHaveBeenCalledTimes(1);
  })

  test('Headings visible test', () => {
    render(<Saved/>)

    const Home1 = screen.queryByTestId('Home')
    const Learning = screen.queryByTestId('Learning')
    const Community = screen.queryByTestId('Community')

    expect(Home1).toBeInTheDocument();
    expect(Learning).toBeInTheDocument();
    expect(Community).toBeInTheDocument();
  })

  test('Headings click test', () => {
    render(<Saved/>);

    const handleHomeClickMock = jest.fn();
    const handleLearningClickMock = jest.fn();
    const handleCommunityClickMock = jest.fn();

    const All = screen.queryByTestId('All')
    const Recommended1 = screen.queryByTestId('Recommended')
    const Applied1 = screen.queryByTestId('Applied')

    All.onclick = handleHomeClickMock;
    Recommended1.onclick = handleLearningClickMock;
    Applied1.onclick = handleCommunityClickMock;

    fireEvent.click(All)
    fireEvent.click(Recommended1)
    fireEvent.click(Applied1)


    expect(handleHomeClickMock).toHaveBeenCalledTimes(1);
    expect(handleLearningClickMock).toHaveBeenCalledTimes(1);
    expect(handleCommunityClickMock).toHaveBeenCalledTimes(1);
  })




  test('Bell,Profile text visible test', () => {
    render(<Saved/>);
    const Bell = screen.queryByTestId('Bell')
    const ProfileName = screen.queryByTestId('Profile')
    expect(Bell).toBeInTheDocument();
    expect(ProfileName).toBeInTheDocument();
  })

  test('Bell Icon and profile text click test', () => {

    render(<Saved/>)

    const handleIconClickMock = jest.fn();
    const handleProfileClickMock = jest.fn();

    const Bell = screen.queryByTestId('Bell')
    const Profile = screen.queryByTestId('Profile')

    Bell.onclick = handleIconClickMock
    Profile.onclick = handleProfileClickMock

    // Bell.addEventListener('click', handleIconClickMock);
    // Profile.addEventListener('click', handleProfileClickMock);
    fireEvent.click(Bell)
    fireEvent.click(Profile)
    expect(screen.queryByTestId('ProfileCard')).toBeVisible()
    expect(screen.queryByTestId('BellModal')).toBeVisible()
    expect(handleIconClickMock).toHaveBeenCalledTimes(1);   
    expect(handleProfileClickMock).toHaveBeenCalledTimes(1);
  })

})

//  describe('Demo',()=>{
//   test('Demo',()=>{
//     render(<App/>)
//     const handleHomeClickMock = jest.fn();

//     const Home = screen.queryByTestId('Home')

//     Home.onclick=handleHomeClickMock

//     fireEvent.click(Home)

//     expect(handleHomeClickMock).toHaveBeenCalledTimes(1);


//   })
// })

describe('SearchBar, Button visible and search-results test', () => {

  test('SearchBar, Button visible test', () => {
    render(<Saved/>)

    const Search = screen.getByPlaceholderText('Seach Company, title')
    const SearchButton = screen.queryByTestId('SearchButton')
    expect(Search).toBeInTheDocument();
    expect(SearchButton).toBeInTheDocument();
  })

  test('SearchBar Empty test', () => {
    render(<Saved/>)
    const Search = screen.getByPlaceholderText('Seach Company, title')
    expect(Search.value).toBe('');

  })

  test('SearchBar Empty Error Test', () => {
    render(<Saved/>)
    const Search = screen.getByPlaceholderText('Seach Company, title')
    const SearchButton = screen.queryByTestId('SearchButton')

    const testValue = ''
    const error = screen.queryByTestId('error')
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
    render(<Saved/>)
    const SearchButton = screen.queryByTestId('SearchButton')
    const Search = screen.queryByTestId('searchResult')
    const DataQualityManager = screen.queryByTestId('DataQualityManager')
    const testValue = 'Data Quality Manager'

    fireEvent.change(Search,{target: {value: testValue}})
    // fireEvent.click(screen.queryByTestId('On-site'))
    fireEvent.click(SearchButton);

    expect(DataQualityManager).toHaveTextContent(Search.value);

  })

  test('Error Message should not be visible', () => {
    
    render(<Saved/>)
    const SearchButton = screen.queryByTestId('SearchButton')
    const Search = screen.getByPlaceholderText('Seach Company, title')
    const testValue = 'test'
    const error = screen.queryByTestId('error')

    fireEvent.change(Search,{target: {value: testValue}})

    fireEvent.click(SearchButton);

    expect(error).not.toBeVisible();
  })

})


describe('Job Card Visible and Job card button click test', () => {

    test('Job Card Visible Test', () => {
        render(<Saved/>)
        const DataQualityManager = screen.queryByTestId('DataQualityManager');
        expect(DataQualityManager).toBeInTheDocument()
    })

    test(' Result Job Card and Buttons Visible Test', () => {
        render(<Saved/>)
        const DataQualityManager = screen.queryByTestId('DataQualityManagerResult');
        const ApplyNow = screen.queryByTestId('ApplyNow');
        const Save = screen.queryByTestId('Save');
        const Share = screen.queryByTestId('Share');

        expect(DataQualityManager).toBeInTheDocument()
        expect(ApplyNow).toBeInTheDocument()
        expect(Save).toBeInTheDocument()
        expect(Share).toBeInTheDocument()
      })
 

  test(' Result Job Card and Buttons Click Test',() =>{
        render(<Saved/>)
        const handleApplyNowClickMock = jest.fn();
        const handleSaveNowClickMock = jest.fn();
        const handleShareNowClickMock = jest.fn();


        const ApplyNow = screen.queryByTestId('ApplyNow');
        const Save = screen.queryByTestId('Save');
        const Share = screen.queryByTestId('Share');

        ApplyNow.onclick=handleApplyNowClickMock;
        Save.onclick=handleSaveNowClickMock;
        Share.onclick=handleShareNowClickMock;

        fireEvent.click(ApplyNow)
        fireEvent.click(Save)
        fireEvent.click(Share)
        expect(screen.queryByTestId('ProfileCard')).toBeVisible()
        expect(handleApplyNowClickMock).toHaveBeenCalledTimes(1)
        expect(handleSaveNowClickMock).toHaveBeenCalledTimes(1)
        expect(handleShareNowClickMock).toHaveBeenCalledTimes(1)
  })
  
})


// test('checkbox click test', () => {
//   render(<Saved/>)  
//   fireEvent.click(screen.getByRole('box'))
//   expect(screen.getByLabelText('Check'))
//   expect(screen.getByLabelText('Check')).toBeChecked()
// })


//  ****************** Select Boxes test ***************************
describe.skip('Select Boxes test', () => {

  test('Select Box visible test', () => {
    render(<Saved/>)
    const Skills = screen.queryByTestId('Skills')
    const Sectors = screen.queryByTestId('Sectors')
    const Specialization = screen.queryByTestId('Specialization')
    const Location = screen.queryByTestId('Location')

    expect(Skills).toBeInTheDocument()
    expect(Sectors).toBeInTheDocument()
    expect(Specialization).toBeInTheDocument()
    expect(Location).toBeInTheDocument()
  })

//   test.skip('should display the correct number of options', () => {
//     render(<Saved/>)
//     expect(screen.getAllByTestId('SkillsOption').length).toBe(3)
//     expect(screen.getAllByTestId('SectorsOption').length).toBe(2)
//     expect(screen.getAllByTestId('SpecializationOption').length).toBe(2)
//     expect(screen.getAllByTestId('LocationOption').length).toBe(2)
//   })
  
//   test('Select Box Default Visible test',()=>{
//     render(<Saved/>)
//     const Skills = screen.queryByTestId('SkillsSelect')
//     const Sectors = screen.queryByTestId('SectorsSelect')
//     const Specialization = screen.queryByTestId('SpecializationSelect')
//     const Location = screen.queryByTestId('LocationSelect')

    
//     expect(Skills).toBeInTheDocument()
//     expect(Sectors).toBeInTheDocument()
//     expect(Specialization).toBeInTheDocument()
//     expect(Location).toBeInTheDocument()

//   })

  test('Select Box Option Select test',()=>{
    render(<Saved/>)
    const handleOptionSelectMock=jest.fn();
    const Skills = screen.queryByTestId('Skills')

    Skills.onchange = handleOptionSelectMock;

    fireEvent.change(Skills,{target:{value : 'Html'}})
    // const formSkills = queryByTestId('formSkills')
    // selectEvent.select((Skills),['Html'])
    // expect(formSkills).toHaveFormValues({Skills: ['Html']})

    expect(handleOptionSelectMock).toHaveBeenCalledTimes(1);


    expect(Skills.value).toBe('Html')
  })

})

//  ****************** Checkbox click test ***************************
describe.skip('Checkboxes click test', () => {

  //  ****************** Work Place Checkbox click test ***************************
  describe('Work Place Type Checkbox click test', () => {

    test('Hybrid checkbox click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('Hybrid'))
      expect(screen.queryByTestId('Hybrid')).toBeInTheDocument();
      expect(screen.queryByTestId('Hybrid')).toBeChecked()
    })

    test('On-site checkbox click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('On-site'))
      expect(screen.queryByTestId('On-site'))
      expect(screen.queryByTestId('On-site')).toBeChecked()
    })

    test('Remote checkbox click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('Remote'))
      expect(screen.queryByTestId('Remote'))
      expect(screen.queryByTestId('Remote')).toBeChecked()
    })

  })

  //  ****************** Job Type Checkbox click test ***********************
  describe('Job Type Checkbox click test', () => {

    test('Contract checkbox click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('Contract'))
      expect(screen.queryByTestId('Contract'))
      expect(screen.queryByTestId('Contract')).toBeChecked()
    })

    test('Part-time checkbox click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('Part-time'))
      expect(screen.queryByTestId('Part-time'))
      expect(screen.queryByTestId('Part-time')).toBeChecked()
    })

    test('Full-time checkbox click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('Full-time'))
      expect(screen.queryByTestId('Full-time'))
      expect(screen.queryByTestId('Full-time')).toBeChecked()
    })

    test('Volunteer checkbox click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('Volunteer'))
      expect(screen.queryByTestId('Volunteer'))
      expect(screen.queryByTestId('Volunteer')).toBeChecked()
    })

    test('Other checkbox click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('Other'))
      expect(screen.queryByTestId('Other'))
      expect(screen.queryByTestId('Other')).toBeChecked()
    })
  })


  //  ****************** Schedule Checkbox click test ***********************

  describe('Schedule Checkbox click test', () => {

    test('Fixed click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('Fixed'))
      expect(screen.queryByTestId('Fixed'))
      expect(screen.queryByTestId('Fixed')).toBeChecked()
    })

    test('Flexible click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('Flexible'))
      expect(screen.queryByTestId('Flexible'))
      expect(screen.queryByTestId('Flexible')).toBeChecked()
    })

    test('WeekendOnly click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('WeekendOnly'))
      expect(screen.queryByTestId('WeekendOnly'))
      expect(screen.queryByTestId('WeekendOnly')).toBeChecked()
    })

    test('MondaytoFriday click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('MondaytoFriday'))
      expect(screen.queryByTestId('MondaytoFriday'))
      expect(screen.queryByTestId('MondaytoFriday')).toBeChecked()
    })

    test('UStime click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('UStime'))
      expect(screen.queryByTestId('UStime'))
      expect(screen.queryByTestId('UStime')).toBeChecked()
    })

    test('Indiatime click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('Indiatime'))
      expect(screen.queryByTestId('Indiatime'))
      expect(screen.queryByTestId('Indiatime')).toBeChecked()
    })

    test('ScheduleOther click test', () => {
      render(<Saved/>)
      fireEvent.click(screen.queryByTestId('ScheduleOther'))
      expect(screen.queryByTestId('ScheduleOther'))
      expect(screen.queryByTestId('ScheduleOther')).toBeChecked()
    })

  })
})