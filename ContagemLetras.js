import React, {Component} from 'react';

class ContagemLetras extends Component{
    render(props){
        return(
            <div>
                <p>Este texto contém {this.props.qtDigitos} caracteres.</p> 
            </div>
        );
    }
}

export default ContagemLetras;