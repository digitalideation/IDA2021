
    
    function lookAtMe() {
        document.getElementById('eye1').style.fill='green';
        document.getElementById('eye2').style.fill='green';
        document.getElementById('pupille1').style.fill='greenyellow';
        document.getElementById('pupille2').style.fill='greenyellow';
        return;
      }

      
    function looseEye() {
        document.getElementById('eye1').style.display='none';
        document.getElementById('eye2').style.display='none';
        document.getElementById('pupille1').style.display='none';
        document.getElementById('pupille2').style.display='none';
        return;
      }

      
    function changeBodyColor() {
        document.getElementById('body').style.fill='orange';
        document.getElementById('body1').style.fill='orange';
        document.getElementById('body_Element_2').style.fill='orange';
        document.getElementById('body_Element_3').style.fill='orange';
        return;
      }
    function reset() {
        document.getElementById('body').style.fill='black';
        document.getElementById('body1').style.fill='black';
        document.getElementById('body_Element_2').style.fill='black';
        document.getElementById('body_Element_3').style.fill='black';
        document.getElementById('eye1').style.display='unset';
        document.getElementById('eye2').style.display='unset';
        document.getElementById('pupille1').style.display='unset';
        document.getElementById('pupille2').style.display='unset';
        document.getElementById('pupille1').style.fill='black';
        document.getElementById('pupille2').style.fill='black';
        document.getElementById('eye1').style.fill='black';
        document.getElementById('eye2').style.fill='black';
        return;
      }

