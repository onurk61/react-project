import { render, screen } from '@testing-library/react';
import AddUser from './AddUser';


test('Check if there is a button with the text of add user', async () => {
    render(<AddUser />)

    await expect(screen.getByRole('button', { name : /add user/i})).toBeInTheDocument()
})