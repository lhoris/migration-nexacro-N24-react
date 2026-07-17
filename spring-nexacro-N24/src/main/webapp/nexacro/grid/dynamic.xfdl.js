(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_keystring("G:grouptype");
            obj.set_reversesubsum("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK_TYPE\" type=\"STRING\" size=\"32\"/><Column id=\"aid\" type=\"STRING\" size=\"32\"/><Column id=\"aname\" type=\"STRING\" size=\"32\"/><Column id=\"groupname\" type=\"STRING\" size=\"32\"/><Column id=\"objgbn\" type=\"STRING\" size=\"32\"/><Column id=\"objlength\" type=\"INT\" size=\"4\"/><Column id=\"objtype\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"aid\">A15</Col><Col id=\"aname\">ComboBox</Col><Col id=\"groupname\">A타입</Col><Col id=\"objgbn\">ComboBox</Col><Col id=\"objlength\">0</Col><Col id=\"objtype\">combocontrol</Col></Row><Row><Col id=\"aid\">A13</Col><Col id=\"aname\">Calendar</Col><Col id=\"groupname\">A타입</Col><Col id=\"objgbn\">Calendar</Col><Col id=\"objlength\">0</Col><Col id=\"objtype\">calendarcontrol</Col></Row><Row><Col id=\"aid\">A14</Col><Col id=\"aname\">Edit</Col><Col id=\"groupname\">A타입</Col><Col id=\"objgbn\">Edit</Col><Col id=\"objlength\">0</Col><Col id=\"objtype\">editcontrol</Col></Row><Row><Col id=\"CHK_TYPE\">A</Col><Col id=\"aid\">A_12_01</Col><Col id=\"aname\">MaskEdit</Col><Col id=\"groupname\">A타입</Col><Col id=\"objgbn\">MaskEdit</Col><Col id=\"objlength\">25</Col><Col id=\"objtype\">maskeditcontrol</Col></Row><Row><Col id=\"CHK_TYPE\">A</Col><Col id=\"aid\">A_09_04</Col><Col id=\"aname\">Number</Col><Col id=\"groupname\">A타입</Col><Col id=\"objgbn\">Number</Col><Col id=\"objlength\">25</Col><Col id=\"objtype\">number</Col></Row><Row><Col id=\"aid\">A111</Col><Col id=\"aname\">CheckBox</Col><Col id=\"groupname\">A타입</Col><Col id=\"objgbn\">CheckBox</Col><Col id=\"objlength\">0</Col><Col id=\"objtype\">checkboxcontrol</Col></Row><Row><Col id=\"CHK_TYPE\">A</Col><Col id=\"aid\">A_09_03</Col><Col id=\"aname\">Button</Col><Col id=\"groupname\">A타입</Col><Col id=\"objgbn\">Button</Col><Col id=\"objlength\">25</Col><Col id=\"objtype\">buttoncontrol</Col></Row><Row><Col id=\"CHK_TYPE\">A</Col><Col id=\"aid\">A_09_03</Col><Col id=\"aname\">TextArea</Col><Col id=\"groupname\">A타입</Col><Col id=\"objgbn\">TextArea</Col><Col id=\"objlength\">25</Col><Col id=\"objtype\">textareacontrol</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"aid\" type=\"STRING\" size=\"256\"/><Column id=\"qid\" type=\"STRING\" size=\"256\"/><Column id=\"qname\" type=\"STRING\" size=\"256\"/><Column id=\"sort\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"aid\">data1</Col><Col id=\"qname\">data1</Col><Col id=\"qid\">data1</Col></Row><Row><Col id=\"qname\">data2</Col><Col id=\"qid\">data2</Col><Col id=\"aid\">data2</Col></Row><Row><Col id=\"qname\">data3</Col><Col id=\"qid\">data3</Col><Col id=\"aid\">data3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLayout", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTypeCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">NONE</Col><Col id=\"data\">타입 선택</Col></Row><Row><Col id=\"code\">A</Col><Col id=\"data\">A타입</Col></Row><Row><Col id=\"code\">B</Col><Col id=\"data\">B타입</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_form", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"c_0_0\" type=\"STRING\" size=\"256\"/><Column id=\"c_0_1\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_0\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_1\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_0\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_1\" type=\"STRING\" size=\"256\"/><Column id=\"c_3_0\" type=\"string\" size=\"256\"/><Column id=\"c_3_1\" type=\"string\" size=\"256\"/><Column id=\"c_4_0\" type=\"string\" size=\"256\"/><Column id=\"c_4_1\" type=\"string\" size=\"256\"/><Column id=\"c_5_0\" type=\"string\" size=\"256\"/><Column id=\"c_5_1\" type=\"string\" size=\"256\"/><Column id=\"c_6_0\" type=\"string\" size=\"256\"/><Column id=\"c_6_1\" type=\"string\" size=\"256\"/><Column id=\"c_7_0\" type=\"string\" size=\"256\"/><Column id=\"c_7_1\" type=\"string\" size=\"256\"/><Column id=\"c_0_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_3_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_4_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_5_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_6_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_7_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_0_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_3_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_4_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_5_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_6_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_7_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_0_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_3_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_4_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_5_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_6_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_7_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_0_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_3_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_4_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_5_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_6_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_7_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_0_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_3_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_4_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_5_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_6_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_7_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_8_0\" type=\"string\" size=\"256\"/><Column id=\"c_8_1\" type=\"string\" size=\"256\"/><Column id=\"c_8_2\" type=\"string\" size=\"256\"/><Column id=\"c_8_3\" type=\"string\" size=\"256\"/><Column id=\"c_8_4\" type=\"string\" size=\"256\"/><Column id=\"c_8_5\" type=\"string\" size=\"256\"/><Column id=\"c_8_6\" type=\"string\" size=\"256\"/><Column id=\"c_9_0\" type=\"string\" size=\"256\"/><Column id=\"c_9_1\" type=\"string\" size=\"256\"/><Column id=\"c_9_2\" type=\"string\" size=\"256\"/><Column id=\"c_9_3\" type=\"string\" size=\"256\"/><Column id=\"c_9_4\" type=\"string\" size=\"256\"/><Column id=\"c_9_5\" type=\"string\" size=\"256\"/><Column id=\"c_9_6\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"c_0_0\">Subject</Col><Col id=\"c_0_1\"/><Col id=\"c_1_0\">Standard&#10;Classification</Col><Col id=\"c_1_1\">Division</Col><Col id=\"c_2_0\">Representiative&#10;Product</Col><Col id=\"c_2_1\">Division</Col><Col id=\"c_3_0\">Address</Col><Col id=\"c_3_1\">English</Col><Col id=\"c_4_1\">Korean</Col><Col id=\"c_5_0\">Etc.</Col><Col id=\"c_6_0\">Contract</Col><Col id=\"c_6_1\">Resident Number</Col><Col id=\"c_1_3\">Main</Col><Col id=\"c_2_3\">Main</Col><Col id=\"c_6_4\">Career</Col><Col id=\"c_1_5\">Sub</Col><Col id=\"c_2_5\">Sub</Col><Col id=\"c_6_5\">Union</Col><Col id=\"c_6_6\">Hobby</Col><Col id=\"c_8_0\">Privacy</Col><Col id=\"c_8_1\">Department</Col><Col id=\"c_8_3\">Position</Col><Col id=\"c_8_5\">Major</Col><Col id=\"c_9_1\">Phone</Col><Col id=\"c_9_3\">Cell Phone</Col><Col id=\"c_9_5\">E-mail</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridformat", this);
            obj._setContents("<ColumnInfo><Column id=\"format\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"format\">&lt;Formats&gt;&#10;  &lt;Format id=&quot;default&quot;&gt;&#10;    &lt;Columns&gt;&#10;      &lt;Column size=&quot;110&quot;/&gt;&#10;      &lt;Column size=&quot;90&quot;/&gt;&#10;      &lt;Column size=&quot;90&quot;/&gt;&#10;      &lt;Column size=&quot;90&quot;/&gt;&#10;      &lt;Column size=&quot;90&quot;/&gt;&#10;      &lt;Column size=&quot;90&quot;/&gt;&#10;      &lt;Column size=&quot;90&quot;/&gt;&#10;    &lt;/Columns&gt;&#10;    &lt;Rows&gt;&#10;      &lt;Row size=&quot;36&quot; band=&quot;head&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;    &lt;/Rows&gt;&#10;    &lt;Band id=&quot;head&quot;&gt;&#10;      &lt;Cell text=&quot;0&quot;/&gt;&#10;      &lt;Cell col=&quot;1&quot; text=&quot;1&quot;/&gt;&#10;      &lt;Cell col=&quot;2&quot; text=&quot;2&quot;/&gt;&#10;      &lt;Cell col=&quot;3&quot; text=&quot;3&quot;/&gt;&#10;      &lt;Cell col=&quot;4&quot; text=&quot;4&quot;/&gt;&#10;      &lt;Cell col=&quot;5&quot; text=&quot;5&quot;/&gt;&#10;      &lt;Cell col=&quot;6&quot; text=&quot;6&quot;/&gt;&#10;    &lt;/Band&gt;&#10;    &lt;Band id=&quot;body&quot;&gt;&#10;      &lt;Cell cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_0_0&quot;/&gt;&#10;      &lt;Cell col=&quot;1&quot; colspan=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_0_1&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_0&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; col=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_1&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; col=&quot;2&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_2&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; col=&quot;3&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_3&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; col=&quot;4&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_4&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; col=&quot;5&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_5&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; col=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_6&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_0&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; col=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_1&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; col=&quot;2&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_2&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; col=&quot;3&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_3&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; col=&quot;4&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_4&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; col=&quot;5&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_5&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; col=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_6&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;3&quot; rowspan=&quot;2&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_3_0&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;3&quot; col=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_3_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;3&quot; col=&quot;2&quot; colspan=&quot;5&quot; edittype=&quot;text&quot; text=&quot;bind:c_3_2&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;4&quot; col=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_4_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;4&quot; col=&quot;2&quot; colspan=&quot;5&quot; edittype=&quot;text&quot; text=&quot;bind:c_4_2&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;5&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_5_0&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;5&quot; col=&quot;1&quot; colspan=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_5_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;6&quot; rowspan=&quot;2&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_6_0&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;6&quot; col=&quot;1&quot; colspan=&quot;3&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_6_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;6&quot; col=&quot;4&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_6_4&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;6&quot; col=&quot;5&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_6_5&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;6&quot; col=&quot;6&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_6_6&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;7&quot; col=&quot;1&quot; colspan=&quot;3&quot; edittype=&quot;text&quot; text=&quot;bind:c_7_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;7&quot; col=&quot;4&quot; edittype=&quot;text&quot; text=&quot;bind:c_7_4&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;7&quot; col=&quot;5&quot; edittype=&quot;text&quot; text=&quot;bind:c_7_5&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;7&quot; col=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_7_6&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; rowspan=&quot;2&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_0&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; col=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; col=&quot;2&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_2&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; col=&quot;3&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_3&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; col=&quot;4&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_4&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; col=&quot;5&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_5&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; col=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_6&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;9&quot; col=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_9_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;9&quot; col=&quot;2&quot; edittype=&quot;text&quot; text=&quot;bind:c_9_2&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;9&quot; col=&quot;3&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_9_3&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;9&quot; col=&quot;4&quot; edittype=&quot;text&quot; text=&quot;bind:c_9_4&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;9&quot; col=&quot;5&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_9_5&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;9&quot; col=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_9_6&quot; wordWrap=&quot;char&quot;/&gt;&#10;    &lt;/Band&gt;&#10;  &lt;/Format&gt;&#10;&lt;/Formats&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"icon\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"id\">row</Col><Col id=\"caption\">행관리</Col><Col id=\"enable\">true</Col></Row><Row><Col id=\"id\">rowadd</Col><Col id=\"level\">1</Col><Col id=\"caption\">행추가</Col><Col id=\"enable\">true</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">rowdel</Col><Col id=\"level\">1</Col><Col id=\"caption\">행삭제</Col><Col id=\"enable\">true</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">col</Col><Col id=\"level\">0</Col><Col id=\"caption\">열관리</Col><Col id=\"enable\">true</Col></Row><Row><Col id=\"id\">coladd</Col><Col id=\"level\">1</Col><Col id=\"caption\">열추가</Col><Col id=\"enable\">true</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">coldel</Col><Col id=\"level\">1</Col><Col id=\"caption\">열삭제</Col><Col id=\"enable\">true</Col><Col id=\"icon\"/></Row><Row><Col id=\"caption\">셀관리</Col><Col id=\"level\">0</Col><Col id=\"id\">cell</Col><Col id=\"enable\">true</Col></Row><Row><Col id=\"id\">merge</Col><Col id=\"level\">1</Col><Col id=\"caption\">셀병합 (Ctrl+m)</Col><Col id=\"enable\">true</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">split</Col><Col id=\"level\">1</Col><Col id=\"caption\">병합취소</Col><Col id=\"icon\"/><Col id=\"enable\">true</Col></Row><Row><Col id=\"id\">cellcolor</Col><Col id=\"level\">0</Col><Col id=\"caption\">색상입력</Col><Col id=\"enable\">true</Col></Row><Row><Col id=\"id\">color</Col><Col id=\"level\">1</Col><Col id=\"caption\">헤더색상입력</Col><Col id=\"enable\">true</Col><Col id=\"icon\"/></Row><Row><Col id=\"id\">cancelcolor</Col><Col id=\"level\">1</Col><Col id=\"caption\">색상취소</Col><Col id=\"icon\"/><Col id=\"enable\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridformatOrg", this);
            obj._setContents("<ColumnInfo><Column id=\"format\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"format\">&lt;Formats&gt;&#10;  &lt;Format id=&quot;default&quot;&gt;&#10;    &lt;Columns&gt;&#10;      &lt;Column size=&quot;110&quot;/&gt;&#10;      &lt;Column size=&quot;90&quot;/&gt;&#10;      &lt;Column size=&quot;90&quot;/&gt;&#10;      &lt;Column size=&quot;90&quot;/&gt;&#10;      &lt;Column size=&quot;90&quot;/&gt;&#10;      &lt;Column size=&quot;90&quot;/&gt;&#10;      &lt;Column size=&quot;90&quot;/&gt;&#10;    &lt;/Columns&gt;&#10;    &lt;Rows&gt;&#10;      &lt;Row size=&quot;36&quot; band=&quot;head&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;      &lt;Row size=&quot;50&quot;/&gt;&#10;    &lt;/Rows&gt;&#10;    &lt;Band id=&quot;head&quot;&gt;&#10;      &lt;Cell text=&quot;0&quot;/&gt;&#10;      &lt;Cell col=&quot;1&quot; text=&quot;1&quot;/&gt;&#10;      &lt;Cell col=&quot;2&quot; text=&quot;2&quot;/&gt;&#10;      &lt;Cell col=&quot;3&quot; text=&quot;3&quot;/&gt;&#10;      &lt;Cell col=&quot;4&quot; text=&quot;4&quot;/&gt;&#10;      &lt;Cell col=&quot;5&quot; text=&quot;5&quot;/&gt;&#10;      &lt;Cell col=&quot;6&quot; text=&quot;6&quot;/&gt;&#10;    &lt;/Band&gt;&#10;    &lt;Band id=&quot;body&quot;&gt;&#10;      &lt;Cell cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_0_0&quot;/&gt;&#10;      &lt;Cell col=&quot;1&quot; colspan=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_0_1&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_0&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; col=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_1&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; col=&quot;2&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_2&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; col=&quot;3&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_3&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; col=&quot;4&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_4&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; col=&quot;5&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_5&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;1&quot; col=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_1_6&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_0&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; col=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_1&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; col=&quot;2&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_2&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; col=&quot;3&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_3&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; col=&quot;4&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_4&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; col=&quot;5&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_5&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;2&quot; col=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_2_6&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;3&quot; rowspan=&quot;2&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_3_0&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;3&quot; col=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_3_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;3&quot; col=&quot;2&quot; colspan=&quot;5&quot; edittype=&quot;text&quot; text=&quot;bind:c_3_2&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;4&quot; col=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_4_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;4&quot; col=&quot;2&quot; colspan=&quot;5&quot; edittype=&quot;text&quot; text=&quot;bind:c_4_2&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;5&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_5_0&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;5&quot; col=&quot;1&quot; colspan=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_5_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;6&quot; rowspan=&quot;2&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_6_0&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;6&quot; col=&quot;1&quot; colspan=&quot;3&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_6_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;6&quot; col=&quot;4&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_6_4&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;6&quot; col=&quot;5&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_6_5&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;6&quot; col=&quot;6&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_6_6&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;7&quot; col=&quot;1&quot; colspan=&quot;3&quot; edittype=&quot;text&quot; text=&quot;bind:c_7_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;7&quot; col=&quot;4&quot; edittype=&quot;text&quot; text=&quot;bind:c_7_4&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;7&quot; col=&quot;5&quot; edittype=&quot;text&quot; text=&quot;bind:c_7_5&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;7&quot; col=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_7_6&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; rowspan=&quot;2&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_0&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; col=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; col=&quot;2&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_2&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; col=&quot;3&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_3&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; col=&quot;4&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_4&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; col=&quot;5&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_5&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;8&quot; col=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_8_6&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;9&quot; col=&quot;1&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_9_1&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;9&quot; col=&quot;2&quot; edittype=&quot;text&quot; text=&quot;bind:c_9_2&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;9&quot; col=&quot;3&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_9_3&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;9&quot; col=&quot;4&quot; edittype=&quot;text&quot; text=&quot;bind:c_9_4&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;9&quot; col=&quot;5&quot; cssclass=&quot;grd_dynamicLabel&quot; edittype=&quot;text&quot; text=&quot;bind:c_9_5&quot; wordWrap=&quot;char&quot;/&gt;&#10;      &lt;Cell row=&quot;9&quot; col=&quot;6&quot; edittype=&quot;text&quot; text=&quot;bind:c_9_6&quot; wordWrap=&quot;char&quot;/&gt;&#10;    &lt;/Band&gt;&#10;  &lt;/Format&gt;&#10;&lt;/Formats&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_formOrg", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"c_0_0\" type=\"STRING\" size=\"256\"/><Column id=\"c_0_1\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_0\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_1\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_0\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_1\" type=\"STRING\" size=\"256\"/><Column id=\"c_3_0\" type=\"string\" size=\"256\"/><Column id=\"c_3_1\" type=\"string\" size=\"256\"/><Column id=\"c_4_0\" type=\"string\" size=\"256\"/><Column id=\"c_4_1\" type=\"string\" size=\"256\"/><Column id=\"c_5_0\" type=\"string\" size=\"256\"/><Column id=\"c_5_1\" type=\"string\" size=\"256\"/><Column id=\"c_6_0\" type=\"string\" size=\"256\"/><Column id=\"c_6_1\" type=\"string\" size=\"256\"/><Column id=\"c_7_0\" type=\"string\" size=\"256\"/><Column id=\"c_7_1\" type=\"string\" size=\"256\"/><Column id=\"c_0_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_3_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_4_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_5_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_6_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_7_2\" type=\"STRING\" size=\"256\"/><Column id=\"c_0_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_3_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_4_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_5_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_6_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_7_3\" type=\"STRING\" size=\"256\"/><Column id=\"c_0_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_3_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_4_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_5_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_6_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_7_4\" type=\"STRING\" size=\"256\"/><Column id=\"c_0_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_3_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_4_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_5_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_6_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_7_5\" type=\"STRING\" size=\"256\"/><Column id=\"c_0_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_1_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_2_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_3_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_4_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_5_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_6_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_7_6\" type=\"STRING\" size=\"256\"/><Column id=\"c_8_0\" type=\"string\" size=\"256\"/><Column id=\"c_8_1\" type=\"string\" size=\"256\"/><Column id=\"c_8_2\" type=\"string\" size=\"256\"/><Column id=\"c_8_3\" type=\"string\" size=\"256\"/><Column id=\"c_8_4\" type=\"string\" size=\"256\"/><Column id=\"c_8_5\" type=\"string\" size=\"256\"/><Column id=\"c_8_6\" type=\"string\" size=\"256\"/><Column id=\"c_9_0\" type=\"string\" size=\"256\"/><Column id=\"c_9_1\" type=\"string\" size=\"256\"/><Column id=\"c_9_2\" type=\"string\" size=\"256\"/><Column id=\"c_9_3\" type=\"string\" size=\"256\"/><Column id=\"c_9_4\" type=\"string\" size=\"256\"/><Column id=\"c_9_5\" type=\"string\" size=\"256\"/><Column id=\"c_9_6\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"c_0_0\">Subject</Col><Col id=\"c_0_1\"/><Col id=\"c_1_0\">Standard&#10;Classification</Col><Col id=\"c_1_1\">Division</Col><Col id=\"c_2_0\">Representiative&#10;Product</Col><Col id=\"c_2_1\">Division</Col><Col id=\"c_3_0\">Address</Col><Col id=\"c_3_1\">English</Col><Col id=\"c_4_1\">Korean</Col><Col id=\"c_5_0\">Etc.</Col><Col id=\"c_6_0\">Contract</Col><Col id=\"c_6_1\">Resident Number</Col><Col id=\"c_1_3\">Main</Col><Col id=\"c_2_3\">Main</Col><Col id=\"c_6_4\">Career</Col><Col id=\"c_1_5\">Sub</Col><Col id=\"c_2_5\">Sub</Col><Col id=\"c_6_5\">Union</Col><Col id=\"c_6_6\">Hobby</Col><Col id=\"c_8_0\">Privacy</Col><Col id=\"c_8_1\">Department</Col><Col id=\"c_8_3\">Position</Col><Col id=\"c_8_5\">Major</Col><Col id=\"c_9_1\">Phone</Col><Col id=\"c_9_3\">Cell Phone</Col><Col id=\"c_9_5\">E-mail</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sample", this);
            obj._setContents("<ColumnInfo><Column id=\"label\" type=\"STRING\" size=\"256\"/><Column id=\"contents1\" type=\"STRING\" size=\"256\"/><Column id=\"contents2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"contents1\"/><Col id=\"contents2\">test</Col><Col id=\"label\">label</Col></Row><Row><Col id=\"contents2\">test</Col><Col id=\"contents1\"/><Col id=\"label\">label</Col></Row><Row><Col id=\"contents2\">test</Col><Col id=\"contents1\"/><Col id=\"label\">label</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","20","740","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"grid.dynamic\",\"Dynamic Grid\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("grid.dynamic");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTree","14","108","130","672",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_treeinitstatus("expand,all");
            obj.set_autofittype("col");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_cssclass("grd_WF_part");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"Column Type\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"expr:dataset.getRowLevel(currow)==0?aname:grouptype\" treelevel=\"expr:1-dataset.getRowLevel(currow)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divReport","157","107",null,"673","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("타입을 선택해주세요.");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.divReport.form);
            obj.set_taborder("0");
            obj.set_cellsizingtype("both");
            obj.set_selecttype("area");
            obj.set_binddataset("ds_form");
            obj.set_autoupdatetype("itemselect");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_WF_dynamic");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divReport.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"66","100","30","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TEXT(\"grid.dynamic.save\",\"양식저장\")");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("grid.dynamic.save");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"66","82","30","123",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TEXT(\"grid.dynamic.clear\",\"초기화\")");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("grid.dynamic.clear");
            this.addChild(obj.name, obj);

            obj = new Static("stDragImage","947","30","153","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_grd_move");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","66","680","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_compTitle05");
            obj.set_text("TEXT(\"grid.dynamic.desc\")");
            obj.getSetter("messageid").set("grid.dynamic.desc");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","947","108","383","168",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("grd_WF_dynamic");
            obj.set_binddataset("ds_sample");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell text=\"label\"/><Cell col=\"1\" text=\"contents1\"/><Cell col=\"2\" text=\"contents2\"/></Band><Band id=\"body\"><Cell text=\"bind:label\" cssclass=\"grd_dynamicLabel\"/><Cell col=\"1\" text=\"bind:contents1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:contents2\" displaytype=\"combocontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","942","295","376","110",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("ㅇ 그리드 클래스 : grd_WF_dynamic\r\nㅇ 라벨(항목)부분 cell class :  grd_dynamicLabel\r\nㅇ cell combo에서 드롭 시 나오는 리스트 높이 조정\r\n- comboitemheight : 44px");
            obj.set_background("lightcyan");
            obj.set_verticalAlign("top");
            obj.set_padding("10px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divReport.form
            obj = new Layout("default","",0,0,this.divReport.form,function(p){});
            this.divReport.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",920,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dynamic.xfdl", function() {
        this.fv_dragFlag = false;
        this.fv_dragType = "";
        this.compArr = new Array();
        this.targetGridCell=0;
        this.targetGridCol=0;

        this.work002_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();


        	const  objApp = nexacro.getApplication();

        	let pmnu = new PopupMenu();
        	pmnu.init("pmnu", 0, 0, 200, 200);
        	this.addChild(pmnu.name, pmnu);
        	pmnu.innerdataset = "ds_popupMenu";
        	pmnu.idcolumn = "id";
        	pmnu.levelcolumn = "level";
        	pmnu.captioncolumn = "caption";
        	pmnu.iconcolumn = "icon";
        	pmnu.enablecolumn = "enable";
        	pmnu.addEventHandler("onmenuclick", this.sortPopupMenuOnMenuClickHandler, this);
        	pmnu.show();
        	pmnu.grid = this.divReport.form.Grid00;

        	// 그리드 이벤트에서 팝업메뉴를 참조하기 위해 추가
        	this.divReport.form.Grid00.rClickPopupMenu = pmnu;

        	// add onrbuttondown handler
        	this.divReport.form.Grid00.addEventHandler("onrbuttondown", this.sortGridOnRButtonDownHandler, this);

        	/*양식 저장 했을 때 불러오기*/
        	if(!nexacro.isEmpty(nexacro.getPrivateProfile( "dynamic_grid_format")) && !nexacro.isEmpty(nexacro.getPrivateProfile( "dynamic_grid_data")) )
        	{
        		this.divReport.form.Grid00.formats = nexacro.getPrivateProfile( "dynamic_grid_format");
        		this.ds_gridformat.loadXML(nexacro.getPrivateProfile( "dynamic_grid_data"));
        	}
        	else
        	{
        		this.divReport.form.Grid00.formats = this.ds_gridformat.getColumn(0,0);
        	}
        };

        this.btnSave_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile( "dynamic_grid_format", this.divReport.form.Grid00.getCurFormatString() );
        	nexacro.setPrivateProfile( "dynamic_grid_data", this.ds_gridformat.saveXML() );

        	alert(nexacro.getApplication().messages["grid.dynamic.save.desc"]);
        };

        this.fn_component_ondrag = function(obj,e)
        {
        	this.fv_dragType = "COMP";
        	this.fv_dragFlag = true;
        	e.userdata = obj;
        	return true;
        }

        this.fn_makeDataset = function(sDsName)
        {
        	if(this.isValidObject(sDsName)==false)
        	{
        		let objDs = new Dataset;
        		this.addChild(sDsName , objDs);

        		objDs.id = sDsName;
        		objDs.name = sDsName;
        	}

        	return this.objects[sDsName];
        }

        this.grdTree_oncelldblclick = function(obj,e)
        {
        	let objTemp, sCompId, sObjGbn, sObjType, x, y, w, h;

        	if(this.dsList.getRowLevel(e.row)==0)
        	{
        		sCompId = this.dsList.getColumn(e.row, "aid");
        		// aId 불일치로 sCompName 값으로 저장
        		sCompName = this.dsList.getColumn(e.row, "aname");
        		sObjGbn = this.dsList.getColumn(e.row, "objgbn");
        		sObjType = this.dsList.getColumn(e.row, "objtype");

        		if(this.dsComp.findRow("compId", sCompId)>-1)
        		{
        			objTemp = this.divReport.form.components["comp"+sCompId];
        			return;
        		}
        	}
        };


        this.grdTree_ondrag = function(obj,e)
        {
        	if(e.row>-1)
        	{
        		this.fv_dragFlag = true;
        		this.fv_dragType = "GRID";
        		this.stDragImage.visible = true;
        		this.stDragImage.targetRow = e.row;
        		return true;
        	}else
        	{
        		return false;
        	}
        };

        this.work002_ondragmove = function(obj,e)
        {
        	let nX, nY;

        	if(this.fv_dragType=="GRID"&&this.fv_dragFlag == true)
        	{
        		nX = e.screenx + 5 - system.clientToScreenX(this, 0);
        		nY = e.screeny + 5 - system.clientToScreenY(this, 0);

        		this.stDragImage.move(nX, nY);
        	}
        };

        this.grdTree_onlbuttonup = function(obj,e)
        {
        	if(this.fv_dragType=="GRID"&&this.fv_dragFlag == true)
        	{

        		this.fv_dragType = "";
        		this.stDragImage.visible = false;

        		let x = this.stDragImage.getOffsetLeft()-this.divReport.getOffsetLeft();
        		let y = this.stDragImage.getOffsetTop()-this.divReport.getOffsetTop()+this.divReport.form.vscrollbar.pos;

        		if(x<0||y<0)return;
        		//trace(this.compArr[0] + ", " + this.compArr[1] + ", " + this.compArr[2]);
        		switch(this.compArr[1])
        		{
        			case "ComboBox":
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "displaytype", "combocontrol");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "edittype", "combo");

        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "combocodecol", "qid");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "combodatacol", "qname");
        				this.divReport.form.Grid00.setCellProperty( "body", this.targetGridCell, "combodataset", "dsDetail");
        				this.divReport.form.Grid00.setCellProperty( "body", this.targetGridCell, "comboitemheight", "44px");
        				//this.divReport.form.Grid00.setCellProperty( "body", this.targetGridCell, "subsumtext", this.compArr[0]);

        				break;

        			case "Calendar":
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "displaytype", "calendarcontrol");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "edittype", "date");
        				break;

        			case "Edit":
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "displaytype", "editcontrol");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "edittype", "text");
        				break;

        			case "MaskEdit":
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "displaytype", "maskeditcontrol");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "edittype", "mask");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "maskeditformat", "######-#{######}");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "maskedittype", "string");
        				break;

        			case "Number":
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "displaytype", "maskeditcontrol");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "edittype", "mask");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "maskeditformat", "#,###");
        				break;

        			case "CheckBox":
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "displaytype", "checkboxcontrol");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "edittype", "checkbox");
        				break;

        			case "Button":
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "displaytype", "buttoncontrol");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "edittype", "button");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "text", "button");

        				break;

        			case "TextArea":
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "displaytype", "textareacontrol");
        				this.divReport.form.Grid00.setCellProperty("body", this.targetGridCell, "edittype", "textarea");

        				break;
        		}
        	}

        	this.compArr.length = 0;
        };

        this.fn_makeDataset = function(sDsName)
        {
        	if(this.isValidObject(sDsName)==false)
        	{
        		let objDs = new Dataset;
        		this.addChild(sDsName , objDs);

        		objDs.id = sDsName;
        		objDs.name = sDsName;
        	}

        	return this.objects[sDsName];
        }

        this.Grid00_oncolresized = function(obj,e)
        {
        	obj.setOffsetWidth( obj.getOffsetWidth() + (e.newvalue - e.oldvalue));
        };

        this.Grid00_onrowresized = function(obj,e)
        {
        	obj.setOffsetHeight( obj.getOffsetHeight() + (e.newvalue - e.oldvalue));
        };


        /************************************************************************************************
        * 우 클릭 메뉴 Popup 관련 function 및 Event
        ************************************************************************************************/
        /************************************************************************************************
         * Even   : sortPopupMenuOnMenuClickHandler (onmenuclick Event Handler)
         * Desc   : Grid 우 클릭 메뉴 Click
         * Param : {obj} Event가 발생한 PopupMenu Component
                        {e} MenuClickEventInfo
         ************************************************************************************************/
        this.sortPopupMenuOnMenuClickHandler = function(obj, e)
        {
        	let selectId = e.id;
        	let cell  = obj.headCellIndex;
        	let grid = obj.grid;
        	//obj.colIdx //셀 index

        	if(e.id == "color")
        	{
        		let gObj = this.pmnu.grid;

        		let sr = gObj.selectstartsubrow;
        		let sc = gObj.selectstartcol;

        		let er = gObj.selectendsubrow;
        		let ec = gObj.selectendcol;

        		for(let i=0; i< this.divReport.form.Grid00.getCellCount( "body" ); i++)
        		{
        			if(this.divReport.form.Grid00.getCellProperty("body",i,"row") >= sr && this.divReport.form.Grid00.getCellProperty("body",i,"row") <= er)
        			{
        				if(this.divReport.form.Grid00.getCellProperty("body",i,"col") >= sc && this.divReport.form.Grid00.getCellProperty("body",i,"col") <= ec)
        				{
        					this.divReport.form.Grid00.setCellProperty("body",i,"cssclass","grd_dynamicLabel");
        				}
        			}
        		}
        	}else if(e.id == "cancelcolor")
        	{
        		let gObj = this.pmnu.grid;

        		let sr = gObj.selectstartsubrow;
        		let sc = gObj.selectstartcol;

        		let er = gObj.selectendsubrow;
        		let ec = gObj.selectendcol;

        		for(let i=0; i< this.divReport.form.Grid00.getCellCount( "body" ); i++)
        		{
        			if(this.divReport.form.Grid00.getCellProperty("body",i,"row") >= sr && this.divReport.form.Grid00.getCellProperty("body",i,"row") <= er)
        			{
        				if(this.divReport.form.Grid00.getCellProperty("body",i,"col") >= sc && this.divReport.form.Grid00.getCellProperty("body",i,"col") <= ec)
        				{
        					this.divReport.form.Grid00.setCellProperty("body",i,"cssclass","");
        				}
        			}
        		}
        	}else if(e.id == "merge"){ //행추가
        		let gObj = this.pmnu.grid;

        		let sr = gObj.selectstartsubrow;
        		let sc = gObj.selectstartcol;

        		let er = gObj.selectendsubrow;
        		let ec = gObj.selectendcol;

        		//수정
        		let nFirstCell;

        		for(let i=0; i< this.divReport.form.Grid00.getCellCount( "body" ); i++)
        		{
        			if(this.divReport.form.Grid00.getCellProperty("body",i,"row") >= sr && this.divReport.form.Grid00.getCellProperty("body",i,"row") <= er)
        			{
        				if(this.divReport.form.Grid00.getCellProperty("body",i,"col") >= sc && this.divReport.form.Grid00.getCellProperty("body",i,"col") <= ec)
        				{
        					nFirstCell = i;
        					break;
        				}
        			}
        		}

        		if(sr != er || sc != ec) //multi-row
        		{
        			gObj.mergeContentsCell("body",sr,sc,er,ec,nFirstCell,false);
        		}else{
        			alert("한개이상의 셀을 선택하세요.");
        			return;
        		}
        	}else if(e.id == "split"){
        		let gObj = this.pmnu.grid;

        		let sr = gObj.selectstartsubrow;
        		let sc = gObj.selectstartcol;

        		let er = gObj.selectendsubrow;
        		let ec = gObj.selectendcol;

        		if(sr != er || sc != ec) //multi-row
        		{
        			//this.objects[gDs.name+"_color"].setColumn(i, j,textcolor+"|"+bkcolor);
        			gObj.splitContentsCell("body",sr,sc,er,ec,true);
        		}

        		for(let i=0; i< this.divReport.form.Grid00.getCellCount( "body" ); i++)
        		{
        			if(this.divReport.form.Grid00.getCellProperty("body",i,"row") >= sr && this.divReport.form.Grid00.getCellProperty("body",i,"row") <= er)
        			{
        				if(this.divReport.form.Grid00.getCellProperty("body",i,"col") >= sc && this.divReport.form.Grid00.getCellProperty("body",i,"col") <= ec)
        				{
        					this.divReport.form.Grid00.setCellProperty("body",i,"text","bind:c_" + this.divReport.form.Grid00.getCellProperty("body",i,"row") + "_" + this.divReport.form.Grid00.getCellProperty("body",i,"col"));
        					this.divReport.form.Grid00.setCellProperty("body",i,"displaytype","normal");
        					this.divReport.form.Grid00.setCellProperty("body",i,"edittype","text");
        					this.divReport.form.Grid00.setCellProperty("body",i,"wordWrap","text");
        				}
        			}
        		}
        	}else if(e.id == "rowadd"){ //행추가
        		//this.divReport.form.Grid00.setOffsetHeight( this.divReport.form.Grid00.getOffsetHeight() + 50);
        		let cellCnt = this.divReport.form.Grid00.getCellCount("body");
        		let nRow = this.divReport.form.Grid00.appendContentsRow("body");
        		this.divReport.form.Grid00.setFormatRowProperty(nRow,"size",50);

        		let columnNm = "c_nRow_nCol";
        		for(var c=0; c<this.divReport.form.Grid00.getFormatColCount(); c++)
        		{
        			columnNm ="c_" + (this.divReport.form.Grid00.getFormatRowCount()-2) + "_" + c;
        			this.ds_form.addColumn(columnNm,"string");
        			var nCel = cellCnt + c;

        			this.divReport.form.Grid00.setCellProperty("body",nCel,"displaytype","normal");
        			this.divReport.form.Grid00.setCellProperty("body",nCel,"edittype","text");
        			this.divReport.form.Grid00.setCellProperty("body",nCel,"text","bind:"+columnNm);
        			this.divReport.form.Grid00.setCellProperty("body",nCel,"wordWrap","text");
        		}
        		this.divReport.form.resetScroll();
        	}else if(e.id == "rowdel"){ //행삭제


        		for(let c=this.divReport.form.Grid00.getFormatColCount()-1; c>=0; c--)
        		{
        			this.ds_form.deleteColumn("c_" + (this.divReport.form.Grid00.getFormatRowCount()-2) + "_" + c);
        		}
        		this.divReport.form.Grid00.deleteContentsRow("body",this.divReport.form.Grid00.getFormatRowCount()-2);


        	}else if(e.id == "coladd"){ //열추가
        		//this.divReport.form.Grid00.setOffsetWidth( this.divReport.form.Grid00.getOffsetWidth() + 100);
        		let nCol = this.divReport.form.Grid00.appendContentsCol("body");
        		this.divReport.form.Grid00.setFormatColProperty(nCol,"size",100);
        		this.divReport.form.Grid00.setCellProperty("head",nCol,"text",nCol);

        		//수정
        		//데이터셋 추가
        		for(let r=0; r<this.divReport.form.Grid00.getFormatRowCount()-1; r++)
        		{
        			this.ds_form.addColumn("c_" + r + "_"+ nCol);
        		}
        		//수정
        		//바인딩
        		for(let i=0; i< this.divReport.form.Grid00.getCellCount( "body" ); i++)
        			{
        				if(this.divReport.form.Grid00.getCellProperty("body",i,"row") >= 0 && this.divReport.form.Grid00.getCellProperty("body",i,"row") <= this.divReport.form.Grid00.getFormatRowCount()-1)
        				{
        					if(this.divReport.form.Grid00.getCellProperty("body",i,"col") >= nCol && this.divReport.form.Grid00.getCellProperty("body",i,"col") <= nCol)
        					{
        						this.divReport.form.Grid00.setCellProperty("body",i,"text","bind:c_" + this.divReport.form.Grid00.getCellProperty("body",i,"row") + "_" + this.divReport.form.Grid00.getCellProperty("body",i,"col"));
        						this.divReport.form.Grid00.setCellProperty("body",i,"displaytype","normal");
        						this.divReport.form.Grid00.setCellProperty("body",i,"edittype","text");
        						this.divReport.form.Grid00.setCellProperty("body",i,"wordWrap","text");
        					}
        				}
        			}


        	}else if(e.id == "coldel"){ //열삭제
        		let nCol = this.divReport.form.Grid00.getFormatColCount()-1;
        		let nColSize = this.divReport.form.Grid00.getRealColSize(nCol);
        		this.divReport.form.Grid00.deleteContentsCol("body",nCol);
        		this.divReport.form.Grid00.setOffsetWidth( this.divReport.form.Grid00.getOffsetWidth() - nColSize);

        		//데이터셋 추가
        		for(let r=this.divReport.form.Grid00.getFormatRowCount()-1; r>=0; r--)
        		{
        			this.ds_form.deleteColumn("c_" + r + "_"+ nCol);
        		}
        	}
        }

        /************************************************************************************************
         * Even   : sortGridOnRButtonDownHandler (onrbuttondown Event Handler)
         * Desc   : Grid 우 클릭 메뉴 Click
         * Param : {obj} Event가 발생한 Grid Component
                        {e} MouseEventInfo
         ************************************************************************************************/
        this.sortGridOnRButtonDownHandler = function(obj, e)
        {
        	let row = e.row;
        	let cell = e.cell;


        	this.rowIdx = e.row;

        	let pmnu = obj.rClickPopupMenu;
        	let ds = this.ds_menu;
        	pmnu.colIdx = e.cell;

        //수정
        	pmnu.trackPopupByComponent(obj, e.canvasx, e.canvasy);
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.ds_form.copyData(this.ds_formOrg);
        	this.ds_gridformat.copyData(this.ds_gridformatOrg);

        	this.divReport.form.Grid00.formats = this.ds_gridformat.getColumn(0,0);

        	alert(nexacro.getApplication().messages["grid.dynamic.init.desc"]);
        };

        this.Button01_onclick = function(obj,e)
        {
        	//trace(this.ds_gridformat.saveXML());
        };

        this.divReport_Grid00_ondragmove = function(obj,e)
        {

        	this.targetGridCell=e.cell;
        	this.targetGridCol=e.col;
        };

        this.grdTree_onlbuttondown = function(obj,e)
        {
        	//this.compArr.length = 0;

        	this.fv_dragType = "";
        	this.stDragImage.visible = false;

        	let objTemp, sCompId, sObjGbn, sObjType, nRow = e.row;

        	sCompId = this.dsList.getColumn(nRow, "aid");
        	sObjGbn = this.dsList.getColumn(nRow, "objgbn");
        	sObjType = this.dsList.getColumn(nRow, "objtype");
        	this.compArr.push(sCompId);
        	this.compArr.push(sObjGbn);
        	this.compArr.push(sObjType);

        };

        this.divReport_Grid00_oncloseup = function(obj,e)
        {
        	if(obj.getCellPropertyValue(e.row, e.cell, "displaytype") === "calendarcontrol"){
        		let chkToday = this.fn_CheckToday(e.value);
        		if(chkToday){
        			let colId = obj.getCellProperty("body", e.cell, "text").split(":")[1];
        			this.ds_form.setColumn(0,colId,"");
        		}

        	}
        };

        this.fn_CheckToday = function(selectionVal){

        	let tDateObj = new Date();
        	let tYear = tDateObj.getFullYear();
        	let tMonth = tDateObj.getMonth()+1;
        	if(tMonth < 10){ tMonth = "0" + tMonth;};
        	let tDay = tDateObj.getDate();
        	let toDay = tYear + tMonth + tDay;

        	if(toDay > selectionVal){
        		alert("당일보다 이전의 날짜는 선택할 수 없습니다");
        		return true;
        	}
        };
        this.frm_sheetDesign_onkeydown = function(obj,e)
        {
        	if(e.ctrlkey && e.keycode ==77)
        	{
        		let sr = this.divReport.form.Grid00.selectstartsubrow;
        		let sc = this.divReport.form.Grid00.selectstartcol;

        		let er = this.divReport.form.Grid00.selectendsubrow;
        		let ec = this.divReport.form.Grid00.selectendcol;

        		//수정
        		let nFirstCell;

        		for(let i=0; i< this.divReport.form.Grid00.getCellCount( "body" ); i++)
        		{
        			if(this.divReport.form.Grid00.getCellProperty("body",i,"row") >= sr && this.divReport.form.Grid00.getCellProperty("body",i,"row") <= er)
        			{
        				if(this.divReport.form.Grid00.getCellProperty("body",i,"col") >= sc && this.divReport.form.Grid00.getCellProperty("body",i,"col") <= ec)
        				{
        					nFirstCell = i;
        					break;
        				}
        			}
        		}

        		// 수정
        		if(sr != er || sc != ec) //multi-row
        		{
        			this.divReport.form.Grid00.mergeContentsCell("body",sr,sc,er,ec,nFirstCell,false);
        		}else{
        			alert("한개이상의 셀을 선택하세요.");
        			return;
        		}
        	}
        };

        this.fn_showTooltip = function(cellInfo, objTooltipStatic, regVal){
        	let sLeft =  Number(this.divReport.form.Grid00.left) + Number(cellInfo.left);
        	let sTop = Number(this.divReport.form.Grid00.getOffsetTop()) + Number(cellInfo.top);
        	if(!objTooltipStatic){
        		objTooltipStatic = new Static("objTooltipStatic", sLeft+18, sTop+40, 200, 30);
        		objTooltipStatic.text = "잘못된 입력값입니다. 확인하세요.";
        		objTooltipStatic.textAlign = "center";
        		objTooltipStatic.cssclass = "sta_tooltip";
        		this.divReport.form.addChild("objTooltipStatic",objTooltipStatic);
        		objTooltipStatic.visible = true;
        		objTooltipStatic.show();
        	}else{
        		objTooltipStatic.move(sLeft+18, sTop+40);
        		objTooltipStatic.visible = true;
        	}
        	if( typeof regVal == "undefined"){
        		objTooltipStatic.visible = false;
        	};

        }
        this.divReport_Grid00_oninput = function(obj,e)
        {
        	obj.updateToDataset();
        };

        this.divReport_Grid00_oncellclick = function(obj,e)
        {
        	//콤보 클릭했을 때 클릭하자마자 바로 드랍다운되도록
        	obj.dropdownCombo();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.work002_onload,this);
            this.addEventHandler("ondragmove",this.work002_ondragmove,this);
            this.addEventHandler("onkeydown",this.frm_sheetDesign_onkeydown,this);
            this.grdTree.addEventHandler("oncelldblclick",this.grdTree_oncelldblclick,this);
            this.grdTree.addEventHandler("ondrag",this.grdTree_ondrag,this);
            this.grdTree.addEventHandler("onlbuttonup",this.grdTree_onlbuttonup,this);
            this.grdTree.addEventHandler("onlbuttondown",this.grdTree_onlbuttondown,this);
            this.divReport.addEventHandler("ondragmove",this.divReport_ondragmove,this);
            this.divReport.form.Grid00.addEventHandler("oncolresized",this.Grid00_oncolresized,this);
            this.divReport.form.Grid00.addEventHandler("onrowresized",this.Grid00_onrowresized,this);
            this.divReport.form.Grid00.addEventHandler("ondragmove",this.divReport_Grid00_ondragmove,this);
            this.divReport.form.Grid00.addEventHandler("oninput",this.divReport_Grid00_oninput,this);
            this.divReport.form.Grid00.addEventHandler("oncloseup",this.divReport_Grid00_oncloseup,this);
            this.divReport.form.Grid00.addEventHandler("oncellclick",this.divReport_Grid00_oncellclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.ds_formOrg.addEventHandler("oncolumnchanged",this.ds_form_oncolumnchanged,this);
        };
        this.loadIncludeScript("dynamic.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
