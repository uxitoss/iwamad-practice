import { useState } from 'react';
import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import Button from './ui/Button';
import TextField from './ui/TextField';
import { validateSignup } from '../lib/validateSignup';
import type { SignupValues } from '../lib/validateSignup';
import type { CampusEvent } from '../data/events';

type EventSignupFormProps = {
  event: CampusEvent;
};

const initialValues: SignupValues = { fullName: '', email: '', tickets: '1' };

function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof SignupValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [booked, setBooked] = useState('');

  const errors = validateSignup(values, seatsLeft);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    const { name } = e.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length === 0) {
      const tickets = Number(values.tickets);
      setSeatsLeft(seatsLeft - tickets);
      setBooked(`Booked: ${tickets} for ${values.fullName}.`);
      setValues(initialValues);
      setTouched({});
      setSubmitAttempted(false);
    }
  }

  function errorFor(field: keyof SignupValues) {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  }

  return (
    <div>
      <p>Seats left: {seatsLeft}</p>
      {booked && <p role="status">{booked}</p>}
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField label="Full name" name="fullName" value={values.fullName}
          onChange={handleChange} onBlur={handleBlur} error={errorFor('fullName')} />
        <TextField label="Email" name="email" type="email" value={values.email}
          onChange={handleChange} onBlur={handleBlur} error={errorFor('email')} />
        <TextField label="Tickets" name="tickets" type="number" min={1} max={4}
          value={values.tickets} onChange={handleChange} onBlur={handleBlur}
          error={errorFor('tickets')} />
        <Button type="submit">Book</Button>
      </form>
    </div>
  );
}

export default EventSignupForm;
