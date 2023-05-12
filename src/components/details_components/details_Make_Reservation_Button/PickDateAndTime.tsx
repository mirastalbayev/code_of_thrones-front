import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from "react";

function PickDateAndTime(){
    const [date, setDate] = useState<string | undefined>();
    const [startTime, setStartTime] = useState<string | undefined>();
    const [endTime, setEndTime] = useState<string | undefined>();

    console.log(date);
    console.log(startTime);
    console.log(endTime);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker label="Date:" onChange={(newValue) => setDate(newValue)}/>
                <TimePicker label="Start time:" onChange={(newValue) => setStartTime(newValue)}/>
                <TimePicker label="End time:" onChange={(newValue) => setEndTime(newValue)}/>
            </DemoContainer>
        </LocalizationProvider>
    )
}

export default PickDateAndTime;