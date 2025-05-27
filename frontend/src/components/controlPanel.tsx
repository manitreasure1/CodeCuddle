

interface ControlPanelProps {
  isTerminalOpen: (open: boolean) => void
  isAiExplanationOpen: (open: boolean) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({isAiExplanationOpen, isTerminalOpen})=> {

  const handleRunIconClick = () =>{
    isTerminalOpen(true)
  }
  const handleExplainIconClick = () =>{
    isAiExplanationOpen(true);
  }

  const handleF1Call = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'F1',
      code: 'F1',
      keyCode: 112,
      which: 112,
      bubbles: true,
      cancelable: true
    });
    window.dispatchEvent(event);
  };

  return (
    <>
      <div className="border position-absolute" style={{ zIndex: '15', right: '30%' }}>
        <span onClick={handleRunIconClick} title="run code/ open terminal" className="btn text-white material-symbols-outlined">terminal</span>
        <span onClick={handleExplainIconClick} title="explain code" className="btn text-white material-symbols-outlined">tooltip</span>
        <span onClick={handleF1Call} title="command pallate" className="btn text-white material-symbols-outlined">keyboard_command_key</span>
      </div>
    </>
  );
};

export default ControlPanel;