import React from 'react';

import { Switch } from './styles';
import { transparentize } from 'polished';

function SwitchToggle(props) {

    
    return (

            <Switch onClick={props.onClick}>
            
                    <input type="radio" id="yes" name="switch" class="btn-switch__radio btn-switch__radio_yes" />
                    <input type="radio" checked id="no" name="switch" class="btn-switch__radio btn-switch__radio_no" />
                    <label for="yes" class="btn-switch__label btn-switch__label_yes"><span class="btn-switch__txt">Texto</span></label>
                    <label for="no" class="btn-switch__label btn-switch__label_no"><span class="btn-switch__txt">URL</span></label>
            </Switch>

    )
}

export default SwitchToggle;