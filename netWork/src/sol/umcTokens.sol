pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract UMCToken is ERC20 {
    address public owner;
    uint256 public MinVP;
    uint256 public MaxVP;
    mapping(address => uint256) public userVP;

    constructor() ERC20("UMCToken", "UMC") {
        owner = msg.sender;
        MinVP = 500 * 10 ** decimals();
        MaxVP = 5144 * 10 ** decimals();
        _mint(msg.sender, 10000 * 10 ** decimals());
    }
    address public owner;
    mapping(address => bool) public voterEligibility;
    
    constructor() ERC20("UMCToken", "UMC") {
        owner = msg.sender;
    }

    function setVoterEligibility(address account, bool isEligible) external onlyOwner {
        voterEligibility[account] = isEligible;
    }

    function vote(string calldata _referendumId, bool _support) external {
        require(voterEligibility[msg.sender] == true, "Not eligible to vote");
        // Implement vote recording logic based on the referendum ID and user support
    }

    function addQuestion(string memory questionText, uint _startTime, uint _endTime) public {
        require(msg.sender == chairperson, "'pour ou contre'?.bin.");
        require(_startTime < _endTime, "Start time must be before end time.");
        questions.push(Question({
            text: questionText,
            totalVotesFor: 0,
            totalVotesAgainst: 0,
            votingOpen: true,
            startTime: _startTime,
            endTime: _endTime
        }));
    }
    function executeRandomLeaderSelection() external onlyOwner {
        // Implement a random leader selection mechanism among the registered users
    }
        function updateUserVP(address account, uint256 amount) external onlyOwner {
        userVP[account] += amount;
    }

    function getUserLevel(address account) public view returns (uint256) {
        if (userVP[account] >= MinVP && userVP[account] < MaxVP) {
            return 1;
        } else if (userVP[account] >= MaxVP) {
            return 5;
        } else {
            return 0;
        }
    
    function mint(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) external onlyOwner {
        _burn(account, amount);
    }

    function transferFrom(address sender, address recipient, uint256 amount) external onlyOwner {
        _transfer(sender, recipient, amount);
    }
}
    function getResult() external view returns (string memory) {
        require(block.timestamp > endTime, "Le vote n'est pas encore terminé.");
        if (votesFor > votesAgainst) {
            return "La majorité est pour la régulation du pouvoir d'achat avec l'UMC.";
        } else if (votesFor < votesAgainst) {
            return "La majorité est contre la régulation du pouvoir d'achat avec l'UMC.";
        } else {
            return "Le vote est à égalité.";
        }
    }
}