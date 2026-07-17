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
                this._setFormPosition(920,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">010000</Col><Col id=\"caption\">Big Menu1</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">010100</Col><Col id=\"caption\">Middle Menu1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">010101</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">010102</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">010200</Col><Col id=\"caption\">Middle Menu2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">010201</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">010202</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">010203</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020000</Col><Col id=\"caption\">Big Menu2</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">020100</Col><Col id=\"caption\">Middle Menu1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">020101</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020102</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020200</Col><Col id=\"caption\">Middle Menu2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">020201</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020202</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">020203</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030000</Col><Col id=\"caption\">Big Menu3</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">030100</Col><Col id=\"caption\">Middle Menu1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">030101</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030102</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030200</Col><Col id=\"caption\">Middle Menu2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">030201</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030202</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">030203</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040000</Col><Col id=\"caption\">Big Menu4</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">040100</Col><Col id=\"caption\">Middle Menu1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">040101</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040102</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040200</Col><Col id=\"caption\">Middle Menu2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">040201</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040202</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">040203</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050000</Col><Col id=\"caption\">Big Menu5</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">050100</Col><Col id=\"caption\">Middle Menu1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">050101</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050102</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050200</Col><Col id=\"caption\">Middle Menu2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">050201</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050202</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">050203</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060000</Col><Col id=\"caption\">Big Menu6</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"id\">060100</Col><Col id=\"caption\">Middle Menu1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">060101</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060102</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060200</Col><Col id=\"caption\">Middle Menu2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"id\">060201</Col><Col id=\"caption\">Small Menu1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060202</Col><Col id=\"caption\">Small Menu2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"id\">060203</Col><Col id=\"caption\">Small Menu3</Col><Col id=\"level\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMegaMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">010000</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_NM\">Big Menu1</Col></Row><Row><Col id=\"MENU_CD\">010100</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Middle Menu1</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">010101</Col><Col id=\"UP_MENU_CD\">010100</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010102</Col><Col id=\"UP_MENU_CD\">010100</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010103</Col><Col id=\"UP_MENU_CD\">010100</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010200</Col><Col id=\"MENU_NM\">Middle Menu2</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"UP_MENU_CD\">010000</Col></Row><Row><Col id=\"MENU_CD\">010201</Col><Col id=\"UP_MENU_CD\">010200</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010300</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Middle Menu3</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">010301</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010302</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010303</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010304</Col><Col id=\"UP_MENU_CD\">010300</Col><Col id=\"MENU_NM\">Small Menu4</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010400</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Middle Menu4</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">010401</Col><Col id=\"UP_MENU_CD\">010400</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010402</Col><Col id=\"UP_MENU_CD\">010400</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010500</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Middle Menu5</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">010501</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010502</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010503</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010504</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu4</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010505</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu5</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010506</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu6</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010507</Col><Col id=\"UP_MENU_CD\">010500</Col><Col id=\"MENU_NM\">Small Menu7</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010600</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Middle Menu6</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">010601</Col><Col id=\"UP_MENU_CD\">010600</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">010602</Col><Col id=\"UP_MENU_CD\">010600</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">011000</Col><Col id=\"UP_MENU_CD\">010000</Col><Col id=\"MENU_NM\">Middle Menu7</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">011001</Col><Col id=\"UP_MENU_CD\">011000</Col><Col id=\"MENU_NM\">Small Menu1</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">011002</Col><Col id=\"UP_MENU_CD\">011000</Col><Col id=\"MENU_NM\">Small Menu2</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">011003</Col><Col id=\"UP_MENU_CD\">011000</Col><Col id=\"MENU_NM\">Small Menu3</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">011004</Col><Col id=\"UP_MENU_CD\">011000</Col><Col id=\"MENU_NM\">Small Menu4</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">011005</Col><Col id=\"UP_MENU_CD\">011000</Col><Col id=\"MENU_NM\">Small Menu5</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_CD\">011006</Col><Col id=\"UP_MENU_CD\">011000</Col><Col id=\"MENU_NM\">Small Menu6</Col><Col id=\"MENU_LVL\">2</Col></Row></Rows>");
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
            obj = new Static("stcBg","0","10",null,null,"0","-10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","72","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Menu Component");
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
            obj.set_text("MegaMenu");
            obj.getSetter("messageid").set("mega.menu");
            obj.set_cssclass("sta_WF_compTitle02");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenu01","20","226","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_callMenu");
            obj.set_text("메뉴 호출");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","121","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Menu");
            obj.getSetter("messageid").set("comp.menu");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_pageTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","291","880","379",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#F5F7FC");
            obj.set_border("1px solid #A598EF");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","45",null,"40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_background("#A598EF");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","100","45","135","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Middle Menu");
            obj.set_cssclass("sta_WF_compMenu01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:0","45","135","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Middle Menu");
            obj.set_cssclass("sta_WF_compMenu01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","Static02:0","45","135","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Middle Menu");
            obj.set_cssclass("sta_WF_compMenu01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","Static03:0","45","135","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Middle Menu");
            obj.set_cssclass("sta_WF_compMenu01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","Static04:0","45","135","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Middle Menu");
            obj.set_cssclass("sta_WF_compMenu01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","100","103","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Small Menu1");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","100","143","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Small Menu2");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","100","183","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Small Menu3");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","100","223","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("Small Menu4");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","100","263","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("Small Menu5");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","100","303","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("Small Menu6");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_00","235","103","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("Small Menu1");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00","235","143","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("Small Menu2");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08_00","235","183","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("Small Menu3");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09_00","235","223","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("Small Menu4");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_00","235","263","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("Small Menu5");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11_00","235","303","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("Small Menu6");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01","370","103","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("Small Menu1");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_01","370","143","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("Small Menu2");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08_01","370","183","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("Small Menu3");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09_01","370","223","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("Small Menu4");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_01","370","263","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("Small Menu5");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11_01","370","303","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("Small Menu6");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_02","505","103","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("Small Menu1");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_02","505","143","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("Small Menu2");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08_02","505","183","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("Small Menu3");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09_02","505","223","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("Small Menu4");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_02","505","263","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("Small Menu5");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11_02","505","303","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("Small Menu6");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_03","640","103","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("Small Menu1");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_03","640","143","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("Small Menu2");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08_03","640","183","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("Small Menu3");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09_03","640","223","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("Small Menu4");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_03","640","263","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("Small Menu5");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11_03","640","303","135","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("Small Menu6");
            obj.set_cssclass("sta_WF_compMenu02");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",920,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp-menu.xfdl", function() {
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
        		case 1 :
        			var objTile;
        			var nValue = this.fvPageHeight - this.fnMoveAni(this.fvTimerIdx, 0, this.fvPageHeight, this.fvTimerMax);
        			var nTop;

        			this.fvTimerIdx++;

        			for (i = 0; i < this.divMenu.form.components.length; i++)
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
        				var nTop = this.objTarget.getOffsetBottom();

        				this.divMenu.form.grdHideMenu.move(5, nTop, null, 0, 5, null);

        				this.fvTimerIdx = 0;

        				this.killTimer(1);
        				this.setTimer(2, 10);
        			}
        			break;

        		case 2 :
        			var objTile;
        			var nValue = this.fnMoveAni(this.fvTimerIdx, 0, this.fvPageHeight, this.fvTimerMax);
        			var nTop;

        			this.fvTimerIdx++;

        			for (i = 0; i < this.divMenu.form.components.length; i++)
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
        			break;
        	}
        };

        this.fnComBtnOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "btnMenu01" : // 메뉴 호출
        			var sFlag;

        			if (this.fvMegaFlag == false) {
        				this.fvMegaFlag = true;
        				sFlag = "+";

        				this.fnCreateMenu("010000", this.divMegaMenu.getOffsetWidth());

        				obj.set_text("메뉴 닫기");
        			} else {
        				this.fvMegaFlag = false;
        				this.divMegaMenu.set_visible(false);
        				sFlag = "-";

        				this.divMegaMenu.set_height(5);

        				obj.set_text("메뉴 호출");
        			}

        			this.resetScroll();

        			// Form Size가 변경되었을 때 프레임에 적용
        			this.fnSetFrameSize(sFlag);
        			break;

        		default :
        			this.dsButtonIdx.setColumn(0, "Idx", obj.name.substr(obj.name.length - 1));

        			this.objTarget = obj;

        			var nTop = this.objTarget.getOffsetBottom();

        			if (this.objTarget_befor != "") {
        				this.setTimer(1, 10);
        			} else {
        				this.divMenu.form.grdHideMenu.move(5, nTop, null, 0, 5, null);
        				this.setTimer(2, 10);
        			}
        			break;
        	}
        };

        this.fnComStcOnClick = function(obj,e)
        {
        	switch (obj.name)
        	{
        		case "stcBg" :
        			this.divMenu1.set_visible(false);

        			obj.sendToBack();
        			break;
        	}
        };

        this.fnMegaMenuStcOnClick = function(obj,e)
        {
        	this.fvMegaFlag = false;

        	this.btnMenu01.set_text("메뉴 호출");

        	alert(obj.text + " 호출!");

        	this.divMegaMenu.set_visible(false);

        	this.divMegaMenu.set_height(5);

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
        			this.divMenu1.set_visible(false);
        			this.stcBg.sendToBack();
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

        this.fnSetFrameSize = function(sFlag)
        {
        	var p = this.parent.parent;
        	var nFormHeight;

        	if (sFlag == "+") {
        		nFormHeight = this.height + this.fvMegaHeight;
        	} else if (sFlag == "-") {
        		nFormHeight = this.height - this.fvMegaHeight;
        	}

        	p["mainPageOnLoad"].call(p, nFormHeight);
        };

        // MegaMenu 생성
        this.fnCreateMenu = function(sMENU_CD, nMegaMenuWidth)
        {
        	var i, j;
        	var nLeft = 0;
        	var nTop = 0;
        	var nWidth = 100;
        	var nHeight = 16;
        	var nSubLeft = 10;
        	var nSubTop = 10;
        	var nMaxHeight = 0;

        	var objPadding = {"x" : 10, "y" : 10};
        	var objStatic;

        	var objComps = this.divMegaMenu.form.components;
        	var nLength;
        	var nCount;
        	var nSubCount;

        	var sMenuCd;
        	var sMenuNm;
        	var sMenuLvl;

        	this.dsMegaMenu.set_enableevent(false);
        	this.dsSubMenu.set_enableevent(false);
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
        	nLeft = nLeft + objPadding.x;
        	nTop = nTop + objPadding.y;

        	for (i = 0; i < nCount; i++)
        	{
        		sMenuCd = this.dsSubMenu.getColumn(i, "MENU_CD");
        		sMenuNm = this.dsSubMenu.getColumn(i, "MENU_NM");

        		objStatic = new Static("st" + sMenuCd, nLeft, nTop, nWidth, nHeight, null, null);
        		this.divMegaMenu.addChild(objStatic.name, objStatic);
        		objStatic.show();
        		objStatic.set_text(sMenuNm);
        		objStatic.set_font('normal bold 10pt/normal "Arial"');

        		this.dsSubMenu.filter("UP_MENU_CD=='" + sMenuCd + "'");
        		nSubCount = this.dsSubMenu.rowcount;

        		nSubLeft = nLeft + objPadding.x;
        		nSubTop = nTop + nHeight + objPadding.y;

        		for (j = 0; j < nSubCount; j++)
        		{
        			sMenuCd = this.dsSubMenu.getColumn(j, "MENU_CD");
        			sMenuNm = this.dsSubMenu.getColumn(j, "MENU_NM");

        			objStatic = new Static("st" + sMenuCd, nSubLeft, nSubTop, nWidth - (nLeft - nSubLeft) - objPadding.x, nHeight, null, null);
        			this.divMegaMenu.addChild(objStatic.name, objStatic);
        			objStatic.show();
        			objStatic.set_text(this.dsSubMenu.getColumn(j, "MENU_NM"));
        			objStatic.menuId = this.dsSubMenu.getColumn(j, "MENU_CD");
        			objStatic.addEventHandler("onclick", this.fnMegaMenuStcOnClick, this);

        			nSubTop = nSubTop + nHeight + objPadding.y;
        		}

        		if (nSubTop > nMaxHeight) nMaxHeight = nSubTop;

        		nLeft = nLeft + nWidth + objPadding.x;

        		if (nLeft + nWidth + objPadding.x > nMegaMenuWidth) {
        			nLeft = objPadding.x;
        			nTop = nMaxHeight + objPadding.y;
        		}

        		this.dsSubMenu.filter("MENU_LVL==1");
        	}

        	this.divMegaMenu.setOffsetWidth(nMegaMenuWidth);
        	this.divMegaMenu.setOffsetHeight(nMaxHeight + 10);

        	this.fvMegaHeight = nMaxHeight + 10;

        	this.dsSubMenu.set_enableevent(true);
        	this.dsMegaMenu.set_enableevent(true);

        	this.divMegaMenu.set_visible(true);
        	this.divMegaMenu.bringToFront();
        };

        this.fnActionAutoMenu = function(objGrd, nRow)
        {
        	if (this.fvRow != nRow)
        	{
        		if (nRow < 0) {
        			this.divMenu1.set_visible(false);
        			return;
        		}

        		var nRowHeight = nexacro.toNumber(this.divMenu1.form.grdAutoMenuSub.getRealRowSize(0));
        		var nLeft = objGrd.getOffsetLeft() + objGrd.getOffsetWidth();
        		var nTop = objGrd.getOffsetTop() + (nRow * nRowHeight);

        		this.fvRow = nRow;
        		this.divMenu1.set_visible(true);
        		this.divMenu1.move(nLeft - 34, nTop);

        		sMENU_CD = this.dsGridMenu.getColumn(this.fvRow, "MENU_CD");

        		this.dsMenu1.filter("UP_MENU_CD=='" + sMENU_CD + "'");
        		this.dsGridMenu2.copyData(this.dsMenu1, true);
        		this.dsMenu1.filter("");

        		this.divMenu1.resize(this.divMenu1.getOffsetWidth(), this.divMenu1.form.grdAutoMenuSub.getRealRowFullSize());

        		this.stcBg.bringToFront();
        		this.grdAutoMenu.bringToFront();
        		this.divMenu1.bringToFront();
        	}
        };

        this.fnSetAccordionMenu = function()
        {
        	var i;
        	var objBtn;
        	var nTop = 0;
        	var sMenuNm;

        	this.dsMenu.filter("level==0");

        	for (i = 0; i < this.dsMenu.rowcount; i++)
        	{
        		sMenuNm = this.dsMenu.getColumn(i, "caption");

        		objBtn = new Button("btnMenu" + i, 0, nTop, null, 40, 0, null);
        		this.divMenu.addChild(objBtn.name, objBtn);

        		objBtn.show();

        		objBtn.set_cssclass("btn_WF_basic02");
        		objBtn.set_text(sMenuNm);
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
            this.stcBg.addEventHandler("onclick",this.fnComStcOnClick,this);
            this.btnMenu01.addEventHandler("onclick",this.fnComBtnOnClick,this);
        };
        this.loadIncludeScript("comp-menu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
