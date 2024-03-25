import { fireEvent, render, screen } from "@testing-library/react"
import RoleSelect from "./RoleSelect"

test('Role Select Page visible test', () => {
    render(<RoleSelect />)
    const Professional = screen.getByTestId('Professional')
    const Employer = screen.getByTestId('Employer')
    const Partner = screen.getByTestId('Partner')
    const RoleImage = screen.getByAltText('ProfessionalImage')
    // const url = 'https://imgv3.fotor.com/images/homepage-feature-card/Car-PNG.jpg'
    expect(Professional).toBeInTheDocument()
    expect(Employer).toBeInTheDocument()
    expect(Partner).toBeInTheDocument()
    expect(RoleImage).toHaveAttribute('alt','ProfessionalImage')


})

// test.skip('Role Select Page Click test', () => {
//     render(<RoleSelect />)
//     const Professional = screen.getByRole('Professional')
//     const Employer = screen.getByRole('Employer')
//     const Partner = screen.getByRole('Partner')

//     const handleProfessionalClickMock = jest.fn();
//     const handleEmployerClickMock = jest.fn();
//     const handlePartnerClickMock = jest.fn();

//     screen.getByRole('Professional').onclick = handleProfessionalClickMock
//     screen.getByRole('Employer').onclick = handleEmployerClickMock
//     screen.getByRole('Partner').onclick = handlePartnerClickMock

//     // const Bell = screen.getByRole('Bell')
//     // const Profile = screen.getByRole('Profile')

//     // Bell.addEventListener('click', handleIconClickMock);
//     // Profile.addEventListener('click', handleProfileClickMock);
//     fireEvent.click(screen.getByRole('Professional'))
//     fireEvent.click(screen.getByRole('Employer'))
//     fireEvent.click(screen.getByRole('Partner'))

//     expect(handleProfessionalClickMock).toHaveBeenCalledTimes(1);
//     expect(handleEmployerClickMock).toHaveBeenCalledTimes(1);
//     expect(handlePartnerClickMock).toHaveBeenCalledTimes(1);

// })

test('Role Select Page Sign up and Sign in Click test', () => {
    render(<RoleSelect />)
    const Signup = screen.getByTestId('Signup')
    const Signin = screen.getByTestId('Signin')

    const handleSignupClickMock = jest.fn();
    const handleSigninClickMock = jest.fn();

    Signup.onclick = handleSignupClickMock
    Signin.onclick = handleSigninClickMock

    fireEvent.click(Signup)
    fireEvent.click(Signin)

    expect(handleSignupClickMock).toHaveBeenCalledTimes(1);
    expect(handleSigninClickMock).toHaveBeenCalledTimes(1);
})
