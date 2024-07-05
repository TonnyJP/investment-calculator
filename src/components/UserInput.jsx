import { Input } from './Input';
export const UserInput = ({ userInput, setUserInput }) => {
  const updateInitialInvest = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        initialInvestment: +e.target.value,
      };
    });
  };
  const updateAnnualInvest = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        annualInvestment: +e.target.value,
      };
    });
  };
  const updateExpectedRet = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        expectedReturn: +e.target.value,
      };
    });
  };
  const updateDuration = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        duration: +e.target.value,
      };
    });
  };
  return (
    <div id='user-input'>
      <div className='input-group'>
        <Input
          name='INITIAL INVESTMENT'
          id='init-inv'
          value={userInput.initialInvestment}
          setValue={updateInitialInvest}
        />
        <Input
          name='ANNUAL INVESTMENT'
          id='an-inv'
          value={userInput.annualInvestment}
          setValue={updateAnnualInvest}
        />
      </div>
      <div className='input-group margin-top'>
        <Input
          name='EXPECTED RETURN'
          id='exp-ret'
          value={userInput.expectedReturn}
          setValue={updateExpectedRet}
        />
        <Input
          name='DURATION'
          id='dur'
          value={userInput.duration}
          setValue={updateDuration}
        />
      </div>
    </div>
  );
};
