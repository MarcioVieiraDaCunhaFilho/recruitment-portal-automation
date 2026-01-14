class viewCandidatesPageElements{
    fieldCandidateName = () =>{
        return '[placeholder="Type for hints..."]'          //Check behaviour
    }
    buttomSearch = () =>{
        return 'button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]'
    }
    buttomReset = () =>{
        return 'button[class="oxd-button oxd-button--medium oxd-button--ghost"]'
    }
    buttomAdd = () =>{
        return 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'   //Alternative: class="oxd-icon bi-plus oxd-button-icon"
    }
    buttomSeeCandidate = () =>{
        return 'button[class="oxd-icon bi-eye-fill"]'    //Check behaviour for multiple results
    }
    buttomRemoveCandidate = () =>{
        return 'button[class="oxd-icon bi-trash"]'      //Check behaviour for multiple results
    }
    
}
export default viewCandidatesPageElements;