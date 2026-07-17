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
                this._setFormPosition(920,910);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">010000</Col><Col id=\"caption\">Big Menu1</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">010100</Col><Col id=\"caption\">Middle Menu1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">010101</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">010102</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">010200</Col><Col id=\"caption\">Middle Menu2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">010201</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">010202</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">010203</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020000</Col><Col id=\"caption\">Big Menu2</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">020100</Col><Col id=\"caption\">Middle Menu1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">020101</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020102</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020200</Col><Col id=\"caption\">Middle Menu2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">020201</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020202</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020203</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030000</Col><Col id=\"caption\">Big Menu3</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">030100</Col><Col id=\"caption\">Middle Menu1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">030101</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030102</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030200</Col><Col id=\"caption\">Middle Menu2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">030201</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030202</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030203</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040000</Col><Col id=\"caption\">Big Menu4</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">040100</Col><Col id=\"caption\">Middle Menu1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">040101</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040102</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040200</Col><Col id=\"caption\">Middle Menu2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">040201</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040202</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040203</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050000</Col><Col id=\"caption\">Big Menu5</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">050100</Col><Col id=\"caption\">Middle Menu1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">050101</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050102</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050200</Col><Col id=\"caption\">Middle Menu2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">050201</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050202</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050203</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060000</Col><Col id=\"caption\">Big Menu6</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">060100</Col><Col id=\"caption\">Middle Menu1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">060101</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060102</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060200</Col><Col id=\"caption\">Middle Menu2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">060201</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060202</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060203</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMegaMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">010000</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_NM\">Big Menu1</Col></Row><Row><Col id=\"MENU_CD\">010100</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Middle Menu1</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">010101</Col><Col id=\"UP_MENU_CD\">010100</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010102</Col><Col id=\"UP_MENU_CD\">010100</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010103</Col><Col id=\"UP_MENU_CD\">010100</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010200</Col><Col id=\"MENU_NM\">Middle Menu2</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"UP_MENU_CD\">010000</Col></Row><Row><Col id=\"MENU_CD\">010201</Col><Col id=\"UP_MENU_CD\">010200</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010300</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Middle Menu3</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">010301</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010302</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010303</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010304</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">Small Menu4</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010400</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Middle Menu4</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">010401</Col><Col id=\"UP_MENU_CD\">010400</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010402</Col><Col id=\"UP_MENU_CD\">010400</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010500</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Middle Menu5</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">010501</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010502</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010503</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010504</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu4</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010505</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu5</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010506</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu6</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010507</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu7</Col><Col id=\"MENU_LVL\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">010100</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Big Menu1</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010200</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Big Menu2</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010300</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Big Menu3</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020100</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">Big Menu4</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020200</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">Big Menu5</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020300</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">Big Menu6</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030100</Col><Col id=\"UP_MENU_CD\">030000</Col><Col id=\"MENU_NM\">Big Menu7</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030200</Col><Col id=\"UP_MENU_CD\">030000</Col><Col id=\"MENU_NM\">Big Menu8</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040100</Col><Col id=\"UP_MENU_CD\">040000</Col><Col id=\"MENU_NM\">Big Menu9</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040200</Col><Col id=\"UP_MENU_CD\">040000</Col><Col id=\"MENU_NM\">Big Menu10</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">090100</Col><Col id=\"UP_MENU_CD\">090000</Col><Col id=\"MENU_NM\">Big Menu11</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">090200</Col><Col id=\"UP_MENU_CD\">090000</Col><Col id=\"MENU_NM\">Big Menu12</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col><Col id=\"PGM_PATH\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridMenu2", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">010100</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010200</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010300</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020100</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">Small Menu4</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu1", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">010000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_NM\">메뉴1</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010100</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Big Menu1</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010101</Col><Col id=\"UP_MENU_CD\">010100</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010102</Col><Col id=\"UP_MENU_CD\">010100</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">010200</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Big Menu2</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010201</Col><Col id=\"UP_MENU_CD\">010200</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010202</Col><Col id=\"UP_MENU_CD\">010200</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">010203</Col><Col id=\"UP_MENU_CD\">010200</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">010300</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Big Menu3</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010301</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">010302</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">010303</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">020000</Col><Col id=\"MENU_NM\">메뉴2</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"PGM_PATH\"/><Col id=\"SORT\">1</Col><Col id=\"UP_MENU_CD\">0</Col></Row><Row><Col id=\"MENU_CD\">020100</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">Big Menu4</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020101</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020102</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\"/><Col id=\"PGM_ID\"/><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">020103</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">020104</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">Small Menu4</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">4</Col></Row><Row><Col id=\"MENU_CD\">020105</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">Small Menu5</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">5</Col></Row><Row><Col id=\"MENU_CD\">020106</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">Small Menu6</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">6</Col></Row><Row><Col id=\"MENU_CD\">020107</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">Small Menu7</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">7</Col></Row><Row><Col id=\"MENU_CD\">020108</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">Small Menu8</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">8</Col></Row><Row><Col id=\"MENU_CD\">020109</Col><Col id=\"UP_MENU_CD\">020100</Col><Col id=\"MENU_NM\">Small Menu9</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">9</Col></Row><Row><Col id=\"MENU_CD\">020200</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">Big Menu5</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020201</Col><Col id=\"UP_MENU_CD\">020200</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020202</Col><Col id=\"UP_MENU_CD\">020200</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">020203</Col><Col id=\"UP_MENU_CD\">020200</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">020204</Col><Col id=\"UP_MENU_CD\">020200</Col><Col id=\"MENU_NM\">Small Menu4</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">4</Col></Row><Row><Col id=\"MENU_CD\">020205</Col><Col id=\"UP_MENU_CD\">020200</Col><Col id=\"MENU_NM\">Small Menu5</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">5</Col></Row><Row><Col id=\"MENU_CD\">020206</Col><Col id=\"UP_MENU_CD\">020200</Col><Col id=\"MENU_NM\">Small Menu6</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">6</Col></Row><Row><Col id=\"MENU_CD\">020300</Col><Col id=\"UP_MENU_CD\">020000</Col><Col id=\"MENU_NM\">Big Menu6</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020301</Col><Col id=\"UP_MENU_CD\">020300</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">020302</Col><Col id=\"UP_MENU_CD\">020300</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">020303</Col><Col id=\"UP_MENU_CD\">020300</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">030000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_NM\">메뉴3</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030100</Col><Col id=\"UP_MENU_CD\">030000</Col><Col id=\"MENU_NM\">Big Menu7</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030101</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030102</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">030103</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">030104</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">Small Menu4</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">4</Col></Row><Row><Col id=\"MENU_CD\">030105</Col><Col id=\"UP_MENU_CD\">030100</Col><Col id=\"MENU_NM\">Small Menu5</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">5</Col></Row><Row><Col id=\"MENU_CD\">030200</Col><Col id=\"UP_MENU_CD\">030000</Col><Col id=\"MENU_NM\">Big Menu8</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030201</Col><Col id=\"UP_MENU_CD\">030200</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">030202</Col><Col id=\"UP_MENU_CD\">030200</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">030203</Col><Col id=\"UP_MENU_CD\">030200</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">040000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_NM\">메뉴4</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040100</Col><Col id=\"UP_MENU_CD\">040000</Col><Col id=\"MENU_NM\">Big Menu9</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040101</Col><Col id=\"UP_MENU_CD\">040100</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040200</Col><Col id=\"UP_MENU_CD\">040000</Col><Col id=\"MENU_NM\">Big Menu10</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040201</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"UP_MENU_CD\">040200</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">040202</Col><Col id=\"UP_MENU_CD\">040200</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col></Row><Row><Col id=\"MENU_CD\">040203</Col><Col id=\"UP_MENU_CD\">040200</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">3</Col></Row><Row><Col id=\"MENU_CD\">090000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_NM\">메뉴5</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">090100</Col><Col id=\"UP_MENU_CD\">090000</Col><Col id=\"MENU_NM\">Big Menu11</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col></Row><Row><Col id=\"MENU_CD\">090101</Col><Col id=\"UP_MENU_CD\">090100</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">1</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">poc01.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090102</Col><Col id=\"UP_MENU_CD\">090100</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">poc02.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090103</Col><Col id=\"UP_MENU_CD\">090100</Col><Col id=\"SORT\">3</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">poc03.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090200</Col><Col id=\"UP_MENU_CD\">090000</Col><Col id=\"MENU_NM\">Big Menu12</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"SORT\">1</Col><Col id=\"PGM_PATH\"/></Row><Row><Col id=\"MENU_CD\">090201</Col><Col id=\"UP_MENU_CD\">090200</Col><Col id=\"SORT\">1</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">sample01.xfdl</Col></Row><Row><Col id=\"MENU_CD\">090202</Col><Col id=\"UP_MENU_CD\">090200</Col><Col id=\"SORT\">2</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">work</Col><Col id=\"PGM_ID\">sample02.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsButtonIdx", this);
            obj._setContents("<ColumnInfo><Column id=\"Idx\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Idx\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHideMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"upid\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">010101</Col><Col id=\"upid\">010000</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">1</Col><Col id=\"status\">[Undefined]</Col></Row><Row><Col id=\"id\">010102</Col><Col id=\"upid\">010000</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">1</Col><Col id=\"status\">[Undefined]</Col></Row><Row><Col id=\"id\">010201</Col><Col id=\"upid\">010000</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">1</Col><Col id=\"status\">[Undefined]</Col></Row><Row><Col id=\"id\">010202</Col><Col id=\"upid\">010000</Col><Col id=\"caption\">Small Menu4</Col><Col id=\"level\">1</Col><Col id=\"status\">[Undefined]</Col></Row><Row><Col id=\"id\">010203</Col><Col id=\"upid\">010000</Col><Col id=\"caption\">Small Menu5</Col><Col id=\"level\">1</Col><Col id=\"status\">[Undefined]</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMegaMenu","20","286",null,"5","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_cssclass("div_WF_magamenu");
            obj.set_text("");
            obj.set_background("#F5F7FC");
            obj.set_border("1px solid #A598EF");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","20","divMegaMenu:30","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("TEXT(\"various.menu\",\"TreeMenu, AutoMenu, AccordionMenu\")");
            obj.getSetter("messageid").set("various.menu");
            obj.set_cssclass("sta_WF_compTitle02");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","396","Static03_00_00:10",null,"489","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHideMenu","0","0",null,"469","0",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsHideMenu");
            obj.getSetter("useinputpanel").set("false");
            obj.set_useselcolor("false");
            obj.getSetter("scrollbars").set("none");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell style=\"padding:5 5 5 5;\" text=\"bind:caption\"/></Band></Format></Formats>");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static03","20","72","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"menu.component\",\"Menu Component\")");
            obj.getSetter("messageid").set("menu.component");
            obj.set_cssclass("sta_WF_compTitle02");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","20","112",null,"40","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsMenu");
            obj.set_captioncolumn("caption");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            obj.set_popupitemheight("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","186","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TEXT(\"mega.menu\",\"MegaMenu\")");
            obj.getSetter("messageid").set("mega.menu");
            obj.set_cssclass("sta_WF_compTitle02");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenu01","20","226","175","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_callMenu");
            obj.set_text("TEXT(\"comp.menu.callMenu\",\"메뉴 호출\")");
            obj.getSetter("messageid").set("comp.menu.callMenu");
            this.addChild(obj.name, obj);

            obj = new Grid("grdLeftMenu","20","Static03_00_00:10","182","489",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsMenu");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"179\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"Menu List\"/></Band><Band id=\"body\"><Cell text=\"bind:caption\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAutoMenu","212","Static03_00_00:10","174","489",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsGridMenu");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/></Columns><Rows><Row size=\"34\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:MENU_NM\" treestartlevel=\"1\" treelevel=\"bind:MENU_LVL\" autosizerow=\"limitmax\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu1","366","427","176","136",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAutoMenuSub","0","0",null,"136","0",null,null,null,null,null,this.divMenu1.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsGridMenu2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/></Columns><Rows><Row size=\"34\"/></Rows><Band id=\"body\" style=\"border:0 none #808080ff ;selectline:0 none #808080ff ;cellline:0 none #808080ff ;\"><Cell text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.divMenu1.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","121","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("TEXT(\"comp.menu\",\"Menu\")");
            obj.getSetter("messageid").set("comp.menu");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_pageTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMegaMenu.form
            obj = new Layout("default","",0,0,this.divMegaMenu.form,function(p){});
            this.divMegaMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form,function(p){});
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMenu1.form
            obj = new Layout("default","",0,0,this.divMenu1.form,function(p){});
            this.divMenu1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",920,910,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("menu.xfdl", function() {
        this.fvMegaFlag = false; // MegaMenu 닫기 위한 Flag 값
        this.fvMegaHeight;

        this.fvTimerIdx = 0;
        this.fvTimerMax = 20;
        this.fvPageHeight = 122;
        this.fvRow;

        this.objTarget;
        this.objTarget_befor = "";

        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad();

        	this.langCode = nexacro.getApplication().langCode;

        	this.fnSetAccordionMenu();
        };

        this.form_ontimer = function(obj,e)
        {
        	switch (e.timerid)
        	{
        		case 1 :{
        			let objTile;
        			let nValue = this.fvPageHeight - this.fnMoveAni(this.fvTimerIdx, 0, this.fvPageHeight, this.fvTimerMax);
        			let nTop;

        			this.fvTimerIdx++;

        			for (let i = 0; i < this.divMenu.form.components.length; i++)
        			{
        				objTile = this.divMenu.form.components[i];

        				nTop = nexacro.toNumber(objTile.orgTop)

        				if (objTile.orgTop > this.objTarget_befor.orgTop) {
        					nTop = nTop + nValue;
        				}

        				objTile.setOffsetTop(nTop);
        			}

        			this.divMenu.form.grdHideMenu.setOffsetHeight(nValue);

        			if (this.fvTimerIdx == this.fvTimerMax) {
        				let nTop = this.objTarget.getOffsetBottom();

        				this.divMenu.form.grdHideMenu.move(5, nTop, null, 0, 5, null);

        				this.fvTimerIdx = 0;

        				this.killTimer(1);
        				this.setTimer(2, 10);
        			}
        			}break;

        		case 2 :{
        			let objTile;
        			let nValue = this.fnMoveAni(this.fvTimerIdx, 0, this.fvPageHeight, this.fvTimerMax);
        			let nTop;

        			this.fvTimerIdx++;

        			for (let i = 0; i < this.divMenu.form.components.length; i++)
        			{
        				objTile = this.divMenu.form.components[i];

        				nTop = nexacro.toNumber(objTile.orgTop)

        				if (objTile.orgTop > this.objTarget.orgTop) {
        					nTop = nTop + nValue;
        					objTile.setOffsetTop(nTop);
        				}
        			}

        			this.divMenu.form.grdHideMenu.setOffsetHeight(nValue + 2);

        			if (this.fvTimerIdx == this.fvTimerMax) {
        				this.fvTimerIdx = 0;

        				this.objTarget_befor = this.objTarget;

        				this.killTimer(2);
        			}
        			}break;
        	}
        };

        this.fnComBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btnMenu01" :{ // 메뉴 호출
        			let sFlag;

        			if (this.fvMegaFlag == false) {
        				this.fvMegaFlag = true;
        				sFlag = "+";

        				this.fnCreateMenu("010000", this.divMegaMenu.getOffsetWidth());

        				if(this.langCode == "ko"){
        					obj.text = "메뉴 닫기";
        				} else {
        					obj.text = "Close Menu";
        				}

        			} else {
        				this.fvMegaFlag = false;
        				this.divMegaMenu.visible = false;
        				sFlag = "-";

        				this.divMegaMenu.height = 5;

        				if(this.langCode == "ko"){
        					obj.text = "메뉴 호출";
        				} else {
        					obj.text = "Call Menu";
        				}
        			}

        			this.resetScroll();

        			// Form Size가 변경되었을 때 프레임에 적용
        			this.fnSetFormSize(sFlag);
        			}break;

        		default :{
        			this.dsButtonIdx.setColumn(0, "Idx", obj.name.substr(obj.name.length - 1));

        			this.objTarget = obj;

        			let nTop = this.objTarget.getOffsetBottom();

        			if (this.objTarget_befor != "") {
        				this.setTimer(1, 10);
        			} else {
        				this.divMenu.form.grdHideMenu.move(5, nTop, null, 0, 5, null);
        				this.setTimer(2, 10);
        			}
        			}break;
        	}
        };

        this.fnMegaMenuStcOnClick = function(obj,e)
        {
        	this.fvMegaFlag = false;

        	this.btnMenu01.text = "메뉴 호출";

        	this.alert(obj.text +"  "+nexacro.getApplication().messages["comp.menu.call"]);

        	this.divMegaMenu.visible = false;

        	this.divMegaMenu.height = 5;

        	this.resetScroll();

        	sFlag = "-";

        	// Form Size가 변경되었을 때 프레임에 적용
        	this.fnSetFrameSize(sFlag);
        };

        this.fnComGrdOnCellClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "grdAutoMenuSub" :
        			this.divMenu1.visible = false;
        			break;
        	}
        };

        this.fnComGrdOnMouseEnter = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "grdAutoMenu" :
        			this.fnActionAutoMenu(obj, e.row);
        			break;
        	}
        }

        this.fnComGrdOnMouseMove = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "grdAutoMenu" :
        			this.fnActionAutoMenu(obj, e.row);
        			break;
        	}
        };

        this.fnSetFormSize = function(sFlag)
        {
        	const p = this.parent.parent;
        	let nFormHeight;

        	if (sFlag == "+") {
        		nFormHeight = this.height + this.fvMegaHeight;
        	} else if (sFlag == "-") {
        		nFormHeight = this.height - this.fvMegaHeight;
        	}

        	this.height = nFormHeight;

        //	p["mainPageOnLoad"].call(p, nFormHeight);
        };

        // MegaMenu 생성
        this.fnCreateMenu = function(sMENU_CD, nMegaMenuWidth)
        {
        	let i, j;
        	let nLeft = 100;
        	let nTop = 45;
        	let nWidth = 135;
        	let nHeight = 40;
        	let nSubLeft = 0;
        	let nSubTop ;
        	let nMaxHeight = 0;

        	let objStatic;

        	let objComps = this.divMegaMenu.form.components;
        	let nLength;
        	let nCount;
        	let nSubCount;

        	let sMenuCd;
        	let sMenuNm;
        	let sMenuLvl;

        	this.dsMegaMenu.enableevent = false;
        	this.dsSubMenu.enableevent = false;
        	this.dsMegaMenu.filter('MENU_CD.toString().substr(0,2)=="' + sMENU_CD.substr(0, 2) + '"&&MENU_LVL!="0"');
        	this.dsSubMenu.copyData(this.dsMegaMenu, true);
        	this.dsMegaMenu.filter("");

        	nLength = objComps.length;

        	for (i = nLength - 1; i >= 0; i--)
        	{
        		this.divMegaMenu.removeChild(objComps[i].name);
        	}


        	this.dsSubMenu.filter("MENU_LVL==1");
        	nCount = this.dsSubMenu.rowcount;

        	objStatic = new Static("st_back", 0, nTop, null, nHeight, 0, null);
        	this.divMegaMenu.addChild(objStatic.name, objStatic);
        	objStatic.show();
        	objStatic.background = "#A598EF";

        	for (i = 0; i < nCount; i++)
        	{

        		sMenuCd = this.dsSubMenu.getColumn(i, "MENU_CD");
        		sMenuNm = this.dsSubMenu.getColumn(i, "MENU_NM");

        		objStatic = new Static("st" + sMenuCd, nLeft, nTop, nWidth, nHeight, null, null);
        		this.divMegaMenu.addChild(objStatic.name, objStatic);
        		objStatic.show();
        		objStatic.text = sMenuNm;
        		objStatic.cssclass = "sta_WF_compMenu01";
        		//objStatic.set_font('normal bold 10pt/normal "Arial"');

        		this.dsSubMenu.filter("UP_MENU_CD=='" + sMenuCd + "'");
        		nSubCount = this.dsSubMenu.rowcount;

        		nSubLeft = nLeft ;
        		nSubTop = nTop + nHeight + 15 ;

        		for (j = 0; j < nSubCount; j++)
        		{
        			sMenuCd = this.dsSubMenu.getColumn(j, "MENU_CD");
        			sMenuNm = this.dsSubMenu.getColumn(j, "MENU_NM");

        			objStatic = new Static("st" + sMenuCd, nSubLeft, nSubTop, nWidth - (nLeft - nSubLeft) , nHeight, null, null);
        			this.divMegaMenu.addChild(objStatic.name, objStatic);
        			objStatic.show();
        			objStatic.text = this.dsSubMenu.getColumn(j, "MENU_NM");
        			objStatic.cssclass = "sta_WF_compMenu02";
        			objStatic.menuId = this.dsSubMenu.getColumn(j, "MENU_CD");
        			objStatic.addEventHandler("onclick", this.fnMegaMenuStcOnClick, this);

        			nSubTop = nSubTop + nHeight ;
        		}

        		if (nSubTop > nMaxHeight) nMaxHeight = nSubTop;

        		nLeft = nLeft + nWidth ;


        		if (nLeft + nWidth  > nMegaMenuWidth) {
        			nLeft = 100;
        			nTop = nMaxHeight ;
        		}

        		this.dsSubMenu.filter("MENU_LVL==1");
        	}


        	this.divMegaMenu.setOffsetWidth(nMegaMenuWidth);
        	this.divMegaMenu.setOffsetHeight(nMaxHeight + 50);

        	this.fvMegaHeight = nMaxHeight + 10;

        	this.dsSubMenu.enableevent = true;
        	this.dsMegaMenu.enableevent = true;

        	this.divMegaMenu.visible = true;
        	this.divMegaMenu.bringToFront();
        };


        this.fnActionAutoMenu = function(objGrd, nRow)
        {
        	if (this.fvRow != nRow)
        	{
        		if (nRow < 0) {
        			this.divMenu1.visible = false;
        			return;
        		}

        		let nRowHeight = nexacro.toNumber(this.divMenu1.form.grdAutoMenuSub.getRealRowSize(0));
        		let nLeft = objGrd.getOffsetLeft() + objGrd.getOffsetWidth();
        		let nTop = objGrd.getOffsetTop() + (nRow * nRowHeight);

        		this.fvRow = nRow;
        		this.divMenu1.visible = true;
        		this.divMenu1.move(nLeft - 34, nTop);

        		sMENU_CD = this.dsGridMenu.getColumn(this.fvRow, "MENU_CD");

        		this.dsMenu1.filter("UP_MENU_CD=='" + sMENU_CD + "'");
        		this.dsGridMenu2.copyData(this.dsMenu1, true);
        		this.dsMenu1.filter("");

        		this.divMenu1.resize(this.divMenu1.getOffsetWidth(), this.divMenu1.form.grdAutoMenuSub.getRealRowFullSize());

        		this.grdAutoMenu.bringToFront();
        		this.divMenu1.bringToFront();
        	}
        };

        this.fnSetAccordionMenu = function()
        {
        	let i;
        	let objBtn;
        	let nTop = 0;
        	let sMenuNm;

        	this.dsMenu.filter("level==0");

        	for (i = 0; i < this.dsMenu.rowcount; i++)
        	{
        		sMenuNm = this.dsMenu.getColumn(i, "caption");

        		objBtn = new Button("btnMenu" + i, 0, nTop, null, 40, 0, null);
        		this.divMenu.addChild(objBtn.name, objBtn);

        		objBtn.show();

        		objBtn.cssclass = "btn_WF_basic02";
        		objBtn.text = sMenuNm;
        		objBtn.orgTop = nTop;

        		objBtn.addEventHandler("onclick", this.fnComBtnOnClick, this);
        		nTop = objBtn.getOffsetBottom() + 2;
        	}

        	this.dsMenu.filter("");
        	this.divMenu.form.btnMenu0.click();
        };

        this.fnMoveAni = function(t, b, c, d)
        {
        	t /= d / 2;
        	if (t < 1) return c / 2 * t * t * t + b;
        	t -= 2;

        	return c / 2 * (t * t * t + 2) + b;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.btnMenu01.addEventHandler("onclick",this.fnComBtnOnClick,this);
            this.grdLeftMenu.addEventHandler("oncellclick",this.grdLeftMenu_oncellclick,this);
            this.grdAutoMenu.addEventHandler("onmousemove",this.fnComGrdOnMouseMove,this);
            this.grdAutoMenu.addEventHandler("onmouseenter",this.fnComGrdOnMouseEnter,this);
            this.divMenu1.form.grdAutoMenuSub.addEventHandler("oncellclick",this.fnComGrdOnCellClick,this);
        };
        this.loadIncludeScript("menu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
