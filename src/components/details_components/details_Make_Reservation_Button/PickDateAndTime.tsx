import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';


function checkRange(startTime: string, endTime: string) {
    const startTimeEpoch = new Date(startTime).getTime();
    const endTimeEpoch = new Date(endTime).getTime();
    const elapsed = endTimeEpoch - startTimeEpoch;
  
    return elapsed > 2 * 60 * 60 * 1000;
  }

function PickDateAndTime(){
    const [startTime, setStartTime] = React.useState('');
    const [endTime, setEndTime] = React.useState('');

    const error = checkRange(startTime, endTime)
        ? 'Invalid time, larger than 2 hours'
        : '';

    const handleStartTimeChange = (timeStr: string | null) => {
        const time = timeStr ?? '';
        setStartTime(time);
    };

    const handleEndTimeChange = (timeStr: string | null) => {
        const time = timeStr ?? '';
        setEndTime(time);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                'MobileDateTimePicker',
                ]}
            >         
                <MobileDateTimePicker
                    value={startTime}
                    onChange={handleStartTimeChange}
                />
                <MobileDateTimePicker value={endTime} 
                    onChange={handleEndTimeChange} />
                {!!error && <span>{error}</span>}
            </DemoContainer>
        </LocalizationProvider>
    )
}

export default PickDateAndTime;