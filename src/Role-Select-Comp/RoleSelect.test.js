import { fireEvent, render, screen } from "@testing-library/react"
import RoleSelect from "./RoleSelect"

test('Role Select Page visible test', () => {
    render(<RoleSelect />)
    const Professional = screen.getByRole('Professional')
    const Employer = screen.getByRole('Employer')
    const Partner = screen.getByRole('Partner')

    expect(Professional).toBeInTheDocument()
    expect(Employer).toBeInTheDocument()
    expect(Partner).toBeInTheDocument()

})

test.skip('Role Select Page Click test', () => {
    render(<RoleSelect />)
    const Professional = screen.getByRole('Professional')
    const Employer = screen.getByRole('Employer')
    const Partner = screen.getByRole('Partner')

    const handleProfessionalClickMock = jest.fn();
    const handleEmployerClickMock = jest.fn();
    const handlePartnerClickMock = jest.fn();

    screen.getByRole('Professional').onclick = handleProfessionalClickMock
    screen.getByRole('Employer').onclick = handleEmployerClickMock
    screen.getByRole('Partner').onclick = handlePartnerClickMock

    // const Bell = screen.getByRole('Bell')
    // const Profile = screen.getByRole('Profile')

    // Bell.addEventListener('click', handleIconClickMock);
    // Profile.addEventListener('click', handleProfileClickMock);
    fireEvent.click(screen.getByRole('Professional'))
    fireEvent.click(screen.getByRole('Employer'))
    fireEvent.click(screen.getByRole('Partner'))

    expect(handleProfessionalClickMock).toHaveBeenCalledTimes(1);
    expect(handleEmployerClickMock).toHaveBeenCalledTimes(1);
    expect(handlePartnerClickMock).toHaveBeenCalledTimes(1);

})

test('Role Select Page Sign up and Sign in Click test', () => {
    render(<RoleSelect />)
    const Signup = screen.getByRole('Signup')
    const Signin = screen.getByRole('Signin')

    const handleSignupClickMock = jest.fn();
    const handleSigninClickMock = jest.fn();

    Signup.onclick = handleSignupClickMock
    Signin.onclick = handleSigninClickMock

    fireEvent.click(Signup)
    fireEvent.click(Signin)

    expect(handleSignupClickMock).toHaveBeenCalledTimes(1);
    expect(handleSigninClickMock).toHaveBeenCalledTimes(1);
})
