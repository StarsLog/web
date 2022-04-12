import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { BsCheck2Circle } from "react-icons/bs";
import { BiMoney, BiUserCircle } from "react-icons/bi";
import Range from 'rc-slider';
import Select from '../components/theme/select/Select';
import QuantitySelector from '../components/theme/quantityselector/QuantitySelector';
import InputText from '../components/theme/inputs/InputText';
import InputPassword from '../components/theme/inputs/InputPassword';
import InputRadioCheckbox from '../components/theme/inputs/InputRadioCheckbox';
import Button from '../components/theme/button/Button';

const Bootstrap: NextPage = () => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  return (
    <div className={styles.home}>
      <Head>
        <title>Bootstrap template</title>
      </Head>
      {/* LIGTH TYPOGRAPHY */}
      <div className=''>
        <div className='container'>
          <div className="row">
            <h1>Tipography</h1>
            <h3>Titles</h3>
            <div className='col-6'>
              <h1>Extra large Title</h1>
              <h2>Large Title (h2)</h2>
              <h3>Medium Title (h3)</h3>
              <h4>Small Title (h4)</h4>
              <h5>Extra Small Title (h5)</h5>
              <h6>Extra Extra Small Title (h6)</h6>
            </div>
            <div className='col-6 bg-black-blue'>
              <p className='h1'>Extra large Title</p>
              <p className='h2'>Large Title (h2)</p>
              <p className='h3'>Medium Title (h3)</p>
              <p className='h4'>Small Title (h4)</p>
              <p className='h5'>Extra Small Title (h5)</p>
              <p className='h6'>Extra Extra Small Title (h6)</p>
            </div>
            <h3 className='mt-5'>Color alternatives</h3>
            <div className='col-6'>
              <h2 className='secondary'>Large Title (h2)</h2>
              <h2 className='tertiary'>Large Title (h2)</h2>
            </div>
            <div className='col-6 bg-black-blue'>
              <p className='h2 secondary'>Large Title (h2)</p>
              <p className='h2 tertiary'>Large Title (h2)</p>
            </div>
            <h3 className='mt-5'>Displays</h3>
            <div className='col-6'>
              <h1 className='display-1'>Extra large Display</h1>
              <h2 className='display-2'>Large Display</h2>
              <h3 className='display-3'>Medium Display</h3>
              <h4 className='display-4'>Small Display</h4>
              <h5 className='display-5'>Extra Small Display</h5>
              <h6 className='display-6'>Extra Extra Small Display</h6>
            </div>
            <div className='col-6 bg-black-blue'>
              <p className='display-1'>Extra large Display</p>
              <p className='display-2'>Large Display</p>
              <p className='display-3'>Medium Display</p>
              <p className='display-4'>Small Display</p>
              <p className='display-5'>Extra Small Display</p>
              <p className='display-6'>Extra Extra Small Display</p>
            </div>
            <h3 className='mt-5'>Subtitle</h3>
            <div className='col-6 p-5'>
              <div className='subtitle p-5'>
                Medium subtitle lorem ipsum dolor sit amet, consectetur eiusmod 
              </div>
            </div>
            <div className='col-6 p-5'>
              <div className='subtitle small p-5'>
                Small subtitle lorem ipsum dolor sit amet, consectetur eiusmod 
              </div>
            </div>

            <h3 className='mt-5'>Body texts</h3>
            <div className='col-4'>
              <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl lectus, vestibulum quis magna eu, <a href='#'>placerat</a> varius elit. Nam hendrerit ornare tristique. Aliquam auctor ultrices semper. Sed accumsan molestie urna, scelerisque pretium nibh posuere ac.</p>
            </div>
            <div className='col-4'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl lectus, vestibulum quis magna eu, <a href='#'>placerat</a> varius elit. Nam hendrerit ornare tristique. Aliquam auctor ultrices semper. Sed accumsan molestie urna, scelerisque pretium nibh posuere ac.</p>
            </div>
            <div className='col-4'>
              <p className='fs-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl lectus, vestibulum quis magna eu, <a href='#'>placerat</a> varius elit. Nam hendrerit ornare tristique. Aliquam auctor ultrices semper. Sed accumsan molestie urna, scelerisque pretium nibh posuere ac.</p>
            </div>
            <div className='col-4 bg-black-blue'>
              <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl lectus, vestibulum quis magna eu, <a href='#'>placerat</a> varius elit. Nam hendrerit ornare tristique. Aliquam auctor ultrices semper. Sed accumsan molestie urna, scelerisque pretium nibh posuere ac.</p>
            </div>
            <div className='col-4 bg-black-blue'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl lectus, vestibulum quis magna eu, <a href='#'>placerat</a> varius elit. Nam hendrerit ornare tristique. Aliquam auctor ultrices semper. Sed accumsan molestie urna, scelerisque pretium nibh posuere ac.</p>
            </div>
            <div className='col-4 bg-black-blue'>
              <p className='fs-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl lectus, vestibulum quis magna eu, <a href='#'>placerat</a> varius elit. Nam hendrerit ornare tristique. Aliquam auctor ultrices semper. Sed accumsan molestie urna, scelerisque pretium nibh posuere ac.</p>
            </div>

            <h3>Captions</h3>
            <div className='col-6'>
              <div className="caption-1">XLarge Caption</div>
              <div className="caption-2">Large Caption</div>
              <div className="caption-3">Medium Caption</div>
              <div className="caption-4">Small Caption</div>
              <div className="caption-5">XSmall Caption</div>
            </div>
          </div>
        </div>
      </div>
      {/* LIGHT THEME BUTTONS*/}
      <div className="pt-5 pb-5">
          <div className='container'>
            <h2>Primary</h2>
            <div className='row mb-5'>
              <div className='col-4'>
                <div><b>Text</b></div>
                <Button type='primary' text={'Button'} />
              </div>
              <div className='col-4'>
                <div><b>With Leading icon</b></div>
                <Button type='primary' text={'Button'} icon={<BsCheck2Circle/>} />
              </div>
              <div className='col-4'>
                <div><b>Standalone icon</b></div>
                <Button type='primary' icon={<BsCheck2Circle/>} />
              </div>
            </div>

            <div className='row mb-5'>
              <div className='col-12'>
                <div><b>States</b></div>
              </div>
              <div className='col-2'>
                <Button type='primary' text={'Button'} icon={<BsCheck2Circle/>} />
                <div>ENABLED</div>
              </div>
              <div className='col-2'>
                <Button type='primary' text={'Button'} icon={<BsCheck2Circle/>} className='hover'/>
                <div>HOVER</div>
              </div>
              <div className='col-2'>
                <Button type='primary' text={'Button'} icon={<BsCheck2Circle/>} className='focus'/>
                <div>FOCUS</div>
              </div>
              <div className='col-2'>
                <Button type='primary' text={'Button'} icon={<BsCheck2Circle/>} className='active'/>
                <div>PRESSED</div>
              </div>
              <div className='col-2'>
                <Button type='primary' text={'Button'} icon={<BsCheck2Circle/>} disabled/>
                <div>DISABLED</div>
              </div>
            </div>

            <h2>Outline Primary</h2>
            <div className='row mb-5'>
              <div className='col-4'>
                <div><b>Text</b></div>
                <Button type='outline-primary' text={'Button'} />
              </div>
              <div className='col-4'>
                <div><b>With Leading icon</b></div>
                <Button type='outline-primary' text={'Button'} icon={<BsCheck2Circle/>} />
              </div>
              <div className='col-4'>
                <div><b>Standalone icon</b></div>
                <Button type='outline-primary' icon={<BsCheck2Circle/>} />
              </div>
            </div>

            <div className='row mb-5'>
              <div className='col-12'>
                <div><b>States</b></div>
              </div>
              <div className='col-2'>
                <Button type='outline-primary' text={'Button'} icon={<BsCheck2Circle/>} />
                <div>ENABLED</div>
              </div>
              <div className='col-2'>
                <Button type='outline-primary' text={'Button'} icon={<BsCheck2Circle/>} className='hover'/>
                <div>HOVER</div>
              </div>
              <div className='col-2'>
                <Button type='outline-primary' text={'Button'} icon={<BsCheck2Circle/>} className='focus'/>
                <div>FOCUS</div>
              </div>
              <div className='col-2'>
                <Button type='outline-primary' text={'Button'} icon={<BsCheck2Circle/>} className='active'/>
                <div>PRESSED</div>
              </div>
              <div className='col-2'>
                <Button type='outline-primary' text={'Button'} icon={<BsCheck2Circle/>} disabled/>
                <div>DISABLED</div>
              </div>
            </div>


            <div className='row mb-5'>
              <h2>Size Variations</h2>
              <div className='col-4'>
                <div><b>Large</b></div>
                <Button type='primary' size='lg' text={'Button'} />
                &nbsp;
                <Button type='primary' size='lg' icon={<BsCheck2Circle />} text={'Button'} />
                &nbsp; 
                <Button type='primary' size='lg' icon={<BsCheck2Circle />} />
              </div>
              <div className='col-4'>
                <div><b>Medium</b></div>

                <Button type='primary' text={'Button'} />
                &nbsp;
                <Button type='primary' icon={<BsCheck2Circle />} text={'Button'} />
                &nbsp; 
                <Button type='primary' icon={<BsCheck2Circle />} />
              </div>
              <div className='col-4'>
                <div><b>Small</b></div>

                <Button type='primary' size='sm' text={'Button'} />
                &nbsp;
                <Button type='primary' size='sm' icon={<BsCheck2Circle />} text={'Button'} />
                &nbsp; 
                <Button type='primary' size='sm' icon={<BsCheck2Circle />} />
              </div>
            </div>
          </div>

      </div>
      {/* DARK THEME BUTTONS*/}
      <div className="bg-black-blue pt-5 pb-5">
          <div className='container'>
            <h2>Secondary</h2>
            <div className='row mb-5'>
              <div className='col-4'>
                <div><b>Text</b></div>
                <Button type='secondary' text={'Button'} />
              </div>
              <div className='col-4'>
                <div><b>With Leading icon</b></div>
                <Button type='secondary' text={'Button'} icon={<BsCheck2Circle/>} />
              </div>
              <div className='col-4'>
                <div><b>Standalone icon</b></div>
                <Button type='secondary' icon={<BsCheck2Circle/>} />
              </div>
            </div>

            <div className='row mb-5'>
              <div className='col-12'>
                <div><b>States</b></div>
              </div>
              <div className='col-2'>
                <Button type='secondary' text={'Button'} icon={<BsCheck2Circle/>} />
                <div>ENABLED</div>
              </div>
              <div className='col-2'>
                <Button type='secondary' text={'Button'} icon={<BsCheck2Circle/>} className='hover'/>
                <div>HOVER</div>
              </div>
              <div className='col-2'>
                <Button type='secondary' text={'Button'} icon={<BsCheck2Circle/>} className='focus'/>
                <div>FOCUS</div>
              </div>
              <div className='col-2'>
                <Button type='secondary' text={'Button'} icon={<BsCheck2Circle/>} className='active'/>
                <div>PRESSED</div>
              </div>
              <div className='col-2'>
                <Button type='secondary' text={'Button'} icon={<BsCheck2Circle/>} disabled/>
                <div>DISABLED</div>
              </div>
            </div>

            <h2>Outline Secondary</h2>
            <div className='row mb-5'>
              <div className='col-4'>
                <div><b>Text</b></div>
                <Button type='outline-secondary' text={'Button'} />
              </div>
              <div className='col-4'>
                <div><b>With Leading icon</b></div>
                <Button type='outline-secondary' text={'Button'} icon={<BsCheck2Circle/>} />
              </div>
              <div className='col-4'>
                <div><b>Standalone icon</b></div>
                <Button type='outline-secondary' icon={<BsCheck2Circle/>} />
              </div>
            </div>

            <div className='row mb-5'>
              <div className='col-12'>
                <div><b>States</b></div>
              </div>
              <div className='col-2'>
                <Button type='outline-secondary' text={'Button'} icon={<BsCheck2Circle/>} />
                <div>ENABLED</div>
              </div>
              <div className='col-2'>
                <Button type='outline-secondary' text={'Button'} icon={<BsCheck2Circle/>} className='hover'/>
                <div>HOVER</div>
              </div>
              <div className='col-2'>
                <Button type='outline-secondary' text={'Button'} icon={<BsCheck2Circle/>} className='focus'/>
                <div>FOCUS</div>
              </div>
              <div className='col-2'>
                <Button type='outline-secondary' text={'Button'} icon={<BsCheck2Circle/>} className='active'/>
                <div>PRESSED</div>
              </div>
              <div className='col-2'>
                <Button type='outline-secondary' text={'Button'} icon={<BsCheck2Circle/>} disabled/>
                <div>DISABLED</div>
              </div>
            </div>


            <div className='row mb-5'>
              <h2>Size Variations</h2>
              <div className='col-4'>
                <div><b>Large</b></div>
                <Button type='secondary' size='lg' text={'Button'} />
                &nbsp;
                <Button type='secondary' size='lg' icon={<BsCheck2Circle />} text={'Button'} />
                &nbsp; 
                <Button type='secondary' size='lg' icon={<BsCheck2Circle />} />
              </div>
              <div className='col-4'>
                <div><b>Medium</b></div>

                <Button type='secondary' text={'Button'} />
                &nbsp;
                <Button type='secondary' icon={<BsCheck2Circle />} text={'Button'} />
                &nbsp; 
                <Button type='secondary' icon={<BsCheck2Circle />} />
              </div>
              <div className='col-4'>
                <div><b>Small</b></div>

                <Button type='secondary' size='sm' text={'Button'} />
                &nbsp;
                <Button type='secondary' size='sm' icon={<BsCheck2Circle />} text={'Button'} />
                &nbsp; 
                <Button type='secondary' size='sm' icon={<BsCheck2Circle />} />
              </div>
            </div>
          </div>

      </div>
      {/* LIGHT THEME CONTROLS*/}
      <div className='container mt-5'>
        <h1 className='fw-bold'>Controls</h1>
        
        <div className='row mb-5'>
          <div className='col-12'>
            <h2>Checkbox</h2>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="checkbox" value="0"/>
            <div>ENABLED UNSELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="checkbox" className="hover" value="0"/>
            <div>HOVER UNSELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="checkbox" className="focus" value="0"/>
            <div>FOCUS SELECTED</div>
          </div>
          <div className='col text-center'>
          <InputRadioCheckbox type="checkbox" value="0" checked/>
            <div>ENABLED SELECTED</div>
          </div>
          <div className='col text-center'>
          <InputRadioCheckbox type="checkbox" className="hover" value="0" checked/>
            <div>HOVER SELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="checkbox" className="focus" value="0" checked/>
            <div>FOCUS SELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="checkbox" value="0" disabled/>
            <div>DISABLED UNSELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="checkbox" value="0" disabled checked/>
            <div>DISABLED SELECTED</div>
          </div>
        </div>

        <div className='row mb-5'>
          <div className='col-12'>
            <h2>Radio buttons</h2>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="radio" value="0"/>
            <div>ENABLED UNSELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="radio" className="hover" value="0"/>
            <div>HOVER UNSELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="radio" className="focus" value="0"/>
            <div>FOCUS SELECTED</div>
          </div>
          <div className='col text-center'>
          <InputRadioCheckbox type="radio" value="0" checked/>
            <div>ENABLED SELECTED</div>
          </div>
          <div className='col text-center'>
          <InputRadioCheckbox type="radio" className="hover" value="0" checked/>
            <div>HOVER SELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="radio" className="focus" value="0" checked/>
            <div>FOCUS SELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="radio" value="0" disabled/>
            <div>DISABLED UNSELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="radio" value="0" disabled checked/>
            <div>DISABLED SELECTED</div>
          </div>
        </div>

        <div className='row mb-5  p-0'>
          <div className='col-12'>
            <h2>Switch</h2>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="switch" value="0"/>
            <div>ENABLED UNSELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="switch" className="hover" value="0"/>
            <div>HOVER UNSELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="switch" className="focus" value="0"/>
            <div>FOCUS SELECTED</div>
          </div>
          <div className='col text-center'>
          <InputRadioCheckbox type="switch" value="0" checked/>
            <div>ENABLED SELECTED</div>
          </div>
          <div className='col text-center'>
          <InputRadioCheckbox type="switch" className="hover" value="0" checked/>
            <div>HOVER SELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="switch" className="focus" value="0" checked/>
            <div>FOCUS SELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="switch" value="0" disabled/>
            <div>DISABLED UNSELECTED</div>
          </div>
          <div className='col text-center'>
            <InputRadioCheckbox type="switch" value="0" disabled checked/>
            <div>DISABLED SELECTED</div>
          </div>
        </div>

        <div className='row mb-5 form-switch p-0'>
          <div className='col-12'>
            <h2>Slider</h2>
          </div>
          <div className='col text-center'>
            <Range defaultValue={[20,70]} min={0} max={100} />
            <div>INACTIVE</div>
          </div>
          <div className='col text-center'>
            <Range defaultValue={[20,70]} min={0} max={100} />
            <div>HOVER</div>
          </div>
          <div className='col text-center'>
            <Range defaultValue={[20,70]} min={0} max={100} />
            <div>FOCUS</div>
          </div>
          <div className='col text-center'>
            <Range defaultValue={[20,70]} min={0} max={100} />
            <div>PRESSED</div>
          </div>
        </div>
      </div>
      {/* LIGHT THEME INPUTS*/}
      <div className='pt-5 pb-5'>
        <div className='container'>
          <div className='row mb-5 form-switch p-0'>
            <div className='col-12'>
              <h1>INPUTS</h1>
              <h2>Text Fields</h2>
            </div>
            <div className='col-3'>
              <div><b>Text</b></div>
              <InputText label={'Placeholder as label'}/>
            </div>
            <div className='col-3'>
              <div><b>With assistive text</b></div>
              <InputText label={'Placeholder as label'} help_text={'Optional text'}/>
            </div>
            <div className='col-3'>
              <div><b>Leading Icon</b></div>
              <InputText label={'Placeholder as label'} start_icon={<BiUserCircle/>}/>
            </div>
            <div className='col-3'>
              <div><b>Trailing Icon</b></div>
              <InputText label={'Placeholder as label'} end_icon={<BiMoney/>}/>
            </div>
            <div className='col-3'>
              <div><b>Leading &amp; Trailing Icon</b></div>
              <InputText label={'Placeholder as label'} start_icon={<BiUserCircle/>} end_icon={<BiMoney/>}/>
            </div>
            <div className='col-3'>
              <div><b>Password</b></div>
              <InputPassword label={'Password'} help_text={'Click on the eye to show password'}/>
            </div>
            <div className='col-3'>
              <div><b>Invalid</b></div>
              <InputText label={'Placeholder as label'} invalid={'Please provide a valid city.'}/>
            </div>
            <div className='col-3'>
              <div><b>Disabled</b></div>
              <InputText label={'Placeholder as label'} disabled/>
            </div>
            <div className='col-12'>
              <h2>Select Menu</h2>
            </div>
            <div className='col-3'>
              <Select instanceId="select-1" options={options} label={'Select value'}/>
            </div>
            <div className='col-12'>
              <h2>Quantity selector</h2>
            </div>
            <div className='col-3'>
              <QuantitySelector/>
            </div>
          </div>
        </div>
      </div>

      {/* DARK THEME INPUTS*/}
      <div className='bg-black-blue pt-5 pb-5'>
        <div className='container'>
          <div className='row mb-5 form-switch p-0'>
            <div className='col-12'>
              <h1>INPUTS</h1>
              <h2>Text Fields</h2>
            </div>
            <div className='col-3'>
              <div><b>Text</b></div>
              <InputText label={'Placeholder as label'}/>
            </div>
            <div className='col-3'>
              <div><b>With assistive text</b></div>
              <InputText label={'Placeholder as label'} help_text={'Optional text'}/>
            </div>
            <div className='col-3'>
              <div><b>Leading Icon</b></div>
              <InputText label={'Placeholder as label'} start_icon={<BiUserCircle/>}/>
            </div>
            <div className='col-3'>
              <div><b>Trailing Icon</b></div>
              <InputText label={'Placeholder as label'} end_icon={<BiMoney/>}/>
            </div>
            <div className='col-3'>
              <div><b>Leading &amp; Trailing Icon</b></div>
              <InputText label={'Placeholder as label'} start_icon={<BiUserCircle/>} end_icon={<BiMoney/>}/>
            </div>
            <div className='col-3'>
              <div><b>Password</b></div>
              <InputPassword label={'Password'} help_text={'Click on the eye to show password'}/>
            </div>
            <div className='col-3'>
              <div><b>Invalid</b></div>
              <InputText label={'Placeholder as label'} invalid={'Please provide a valid city.'}/>
            </div>
            <div className='col-3'>
              <div><b>Disabled</b></div>
              <InputText label={'Placeholder as label'} disabled/>
            </div>
            <div className='col-12'>
              <h2>Select Menu</h2>
            </div>
            <div className='col-3'>
              <Select instanceId="select-2" options={options} label={'Select value'}/>
            </div>
            <div className='col-12'>
              <h2>Quantity selector</h2>
            </div>
            <div className='col-3'>
              <QuantitySelector/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default Bootstrap
