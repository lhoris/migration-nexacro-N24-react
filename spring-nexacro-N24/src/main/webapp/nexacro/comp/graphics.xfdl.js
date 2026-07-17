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
            obj = new Dataset("dsLines", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"fromPosition\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/><Column id=\"toPosition\" type=\"STRING\" size=\"256\"/><Column id=\"startCap\" type=\"STRING\" size=\"256\"/><Column id=\"endCap\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">01</Col><Col id=\"from\">01</Col><Col id=\"to\">02</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col><Col id=\"endCap\">true</Col><Col id=\"startCap\">true</Col></Row><Row><Col id=\"id\">02</Col><Col id=\"from\">02</Col><Col id=\"to\">03</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col><Col id=\"startCap\">true</Col></Row><Row><Col id=\"id\">03</Col><Col id=\"from\">03</Col><Col id=\"to\">04</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">04</Col><Col id=\"from\">03</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">09</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">05</Col><Col id=\"from\">04</Col><Col id=\"to\">05</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">06</Col><Col id=\"to\">07</Col><Col id=\"from\">04</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">07</Col><Col id=\"from\">05</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">06</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">08</Col><Col id=\"from\">06</Col><Col id=\"fromPosition\">right</Col><Col id=\"to\">07</Col><Col id=\"toPosition\">left</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">09</Col><Col id=\"from\">07</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">08</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">10</Col><Col id=\"from\">08</Col><Col id=\"to\">09</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">11</Col><Col id=\"from\">09</Col><Col id=\"to\">10</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">12</Col><Col id=\"from\">09</Col><Col id=\"to\">11</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">13</Col><Col id=\"from\">09</Col><Col id=\"to\">12</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">14</Col><Col id=\"from\">09</Col><Col id=\"to\">13</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">15</Col><Col id=\"from\">09</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">14</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">16</Col><Col id=\"to\">23</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"from\">09</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">17</Col><Col id=\"from\">14</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">15</Col><Col id=\"toPosition\">top</Col></Row><Row><Col id=\"id\">18</Col><Col id=\"from\">15</Col><Col id=\"to\">16</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col></Row><Row><Col id=\"id\">19</Col><Col id=\"from\">15</Col><Col id=\"to\">19</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">20</Col><Col id=\"from\">16</Col><Col id=\"to\">17</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">21</Col><Col id=\"from\">16</Col><Col id=\"to\">18</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">22</Col><Col id=\"from\">17</Col><Col id=\"to\">18</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">23</Col><Col id=\"from\">19</Col><Col id=\"to\">20</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col></Row><Row><Col id=\"id\">24</Col><Col id=\"from\">19</Col><Col id=\"to\">21</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col></Row><Row><Col id=\"id\">25</Col><Col id=\"from\">19</Col><Col id=\"to\">22</Col><Col id=\"fromPosition\">left</Col><Col id=\"toPosition\">right</Col></Row><Row><Col id=\"id\">26</Col><Col id=\"from\">23</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"to\">24</Col><Col id=\"toPosition\">top</Col></Row><Row><Col id=\"id\">27</Col><Col id=\"from\">24</Col><Col id=\"to\">25</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">28</Col><Col id=\"from\">24</Col><Col id=\"to\">26</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">29</Col><Col id=\"from\">25</Col><Col id=\"to\">27</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">30</Col><Col id=\"from\">26</Col><Col id=\"to\">28</Col><Col id=\"fromPosition\">bottom</Col><Col id=\"toPosition\">top</Col><Col id=\"endCap\">true</Col></Row><Row><Col id=\"id\">31</Col><Col id=\"from\">28</Col><Col id=\"to\">29</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row><Row><Col id=\"id\">32</Col><Col id=\"from\">28</Col><Col id=\"to\">30</Col><Col id=\"fromPosition\">right</Col><Col id=\"toPosition\">left</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItems", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"x\" type=\"STRING\" size=\"256\"/><Column id=\"y\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">01</Col><Col id=\"type\">type01</Col><Col id=\"title\">customer visit</Col><Col id=\"x\">400</Col><Col id=\"y\">0</Col></Row><Row><Col id=\"id\">02</Col><Col id=\"type\">type01</Col><Col id=\"title\">Investment trends identified</Col><Col id=\"x\">600</Col><Col id=\"y\">0</Col></Row><Row><Col id=\"id\">03</Col><Col id=\"type\">type02</Col><Col id=\"title\">Existing customers</Col><Col id=\"x\">600</Col><Col id=\"y\">50</Col></Row><Row><Col id=\"id\">04</Col><Col id=\"type\">type02</Col><Col id=\"title\">New customer on the bank</Col><Col id=\"x\">400</Col><Col id=\"y\">50</Col></Row><Row><Col id=\"id\">05</Col><Col id=\"title\">New customer registration</Col><Col id=\"type\">type01</Col><Col id=\"y\">100</Col><Col id=\"x\">200</Col></Row><Row><Col id=\"id\">06</Col><Col id=\"title\">Opening a bankbook</Col><Col id=\"type\">type01</Col><Col id=\"x\">200</Col><Col id=\"y\">150</Col></Row><Row><Col id=\"id\">07</Col><Col id=\"title\">Product consultation</Col><Col id=\"type\">type01</Col><Col id=\"x\">400</Col><Col id=\"y\">150</Col></Row><Row><Col id=\"id\">08</Col><Col id=\"title\">Subscribe to the product</Col><Col id=\"type\">type01</Col><Col id=\"x\">400</Col><Col id=\"y\">200</Col></Row><Row><Col id=\"id\">09</Col><Col id=\"type\">type02</Col><Col id=\"title\">Condition change status</Col><Col id=\"x\">600</Col><Col id=\"y\">200</Col></Row><Row><Col id=\"id\">10</Col><Col id=\"title\">New move-in</Col><Col id=\"type\">type01</Col><Col id=\"x\">800</Col><Col id=\"y\">100</Col></Row><Row><Col id=\"id\">11</Col><Col id=\"title\">Fund conversion</Col><Col id=\"type\">type01</Col><Col id=\"y\">150</Col><Col id=\"x\">800</Col></Row><Row><Col id=\"id\">12</Col><Col id=\"title\">name change</Col><Col id=\"type\">type01</Col><Col id=\"y\">200</Col><Col id=\"x\">800</Col></Row><Row><Col id=\"id\">13</Col><Col id=\"title\">Private equity fund reservation</Col><Col id=\"type\">type01</Col><Col id=\"y\">250</Col><Col id=\"x\">800</Col></Row><Row><Col id=\"id\">14</Col><Col id=\"type\">type01</Col><Col id=\"title\">Deposit</Col><Col id=\"x\">400</Col><Col id=\"y\">350</Col></Row><Row><Col id=\"id\">15</Col><Col id=\"type\">type02</Col><Col id=\"title\">Transaction cancellation status</Col><Col id=\"x\">400</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">16</Col><Col id=\"title\">Before base time</Col><Col id=\"type\">type02</Col><Col id=\"x\">200</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">17</Col><Col id=\"title\">Application for approval</Col><Col id=\"type\">type01</Col><Col id=\"x\">0</Col><Col id=\"y\">450</Col></Row><Row><Col id=\"id\">18</Col><Col id=\"title\">Cancellation of transaction</Col><Col id=\"type\">type01</Col><Col id=\"y\">450</Col><Col id=\"x\">200</Col></Row><Row><Col id=\"id\">19</Col><Col id=\"title\">Fund type</Col><Col id=\"type\">type02</Col><Col id=\"y\">500</Col><Col id=\"x\">400</Col></Row><Row><Col id=\"id\">20</Col><Col id=\"type\">type01</Col><Col id=\"title\">Multi-account deposit</Col><Col id=\"x\">200</Col><Col id=\"y\">550</Col></Row><Row><Col id=\"id\">21</Col><Col id=\"type\">type01</Col><Col id=\"title\">MMF Deposit</Col><Col id=\"x\">200</Col><Col id=\"y\">600</Col></Row><Row><Col id=\"id\">22</Col><Col id=\"type\">type01</Col><Col id=\"title\">General fund deposit</Col><Col id=\"x\">200</Col><Col id=\"y\">650</Col></Row><Row><Col id=\"id\">23</Col><Col id=\"type\">type01</Col><Col id=\"title\">Withdrawal/Cancellation</Col><Col id=\"x\">600</Col><Col id=\"y\">350</Col></Row><Row><Col id=\"id\">24</Col><Col id=\"type\">type02</Col><Col id=\"title\">Transaction cancellation status</Col><Col id=\"x\">600</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">25</Col><Col id=\"type\">type02</Col><Col id=\"title\">Before base time</Col><Col id=\"x\">800</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">26</Col><Col id=\"type\">type01</Col><Col id=\"title\">Withdrawal amount check</Col><Col id=\"x\">600</Col><Col id=\"y\">450</Col></Row><Row><Col id=\"id\">27</Col><Col id=\"type\">type01</Col><Col id=\"title\">Cancellation of transaction</Col><Col id=\"x\">800</Col><Col id=\"y\">450</Col></Row><Row><Col id=\"id\">28</Col><Col id=\"type\">type02</Col><Col id=\"title\">Fund type</Col><Col id=\"x\">600</Col><Col id=\"y\">500</Col></Row><Row><Col id=\"id\">29</Col><Col id=\"type\">type01</Col><Col id=\"title\">Withdrawal termination</Col><Col id=\"x\">800</Col><Col id=\"y\">500</Col></Row><Row><Col id=\"id\">30</Col><Col id=\"type\">type01</Col><Col id=\"title\">General withdrawal cancellation</Col><Col id=\"x\">800</Col><Col id=\"y\">550</Col></Row><Row><Col id=\"id\">31</Col><Col id=\"type\">type03</Col><Col id=\"title\">Y</Col><Col id=\"x\">310</Col><Col id=\"y\">40</Col></Row><Row><Col id=\"id\">32</Col><Col id=\"type\">type03</Col><Col id=\"title\">N</Col><Col id=\"x\">410</Col><Col id=\"y\">80</Col></Row><Row><Col id=\"id\">33</Col><Col id=\"type\">type03</Col><Col id=\"title\">New</Col><Col id=\"x\">500</Col><Col id=\"y\">40</Col></Row><Row><Col id=\"id\">34</Col><Col id=\"type\">type03</Col><Col id=\"title\">Existing</Col><Col id=\"x\">620</Col><Col id=\"y\">80</Col></Row><Row><Col id=\"id\">35</Col><Col id=\"type\">type03</Col><Col id=\"title\">Y</Col><Col id=\"x\">675</Col><Col id=\"y\">190</Col></Row><Row><Col id=\"id\">36</Col><Col id=\"type\">type03</Col><Col id=\"title\">N</Col><Col id=\"x\">610</Col><Col id=\"y\">230</Col></Row><Row><Col id=\"id\">37</Col><Col id=\"type\">type03</Col><Col id=\"title\">After base time-Before closing work</Col><Col id=\"x\">50</Col><Col id=\"y\">380</Col></Row><Row><Col id=\"id\">38</Col><Col id=\"type\">type03</Col><Col id=\"title\">Before base time</Col><Col id=\"x\">250</Col><Col id=\"y\">425</Col></Row><Row><Col id=\"id\">39</Col><Col id=\"type\">type03</Col><Col id=\"title\">Y</Col><Col id=\"x\">310</Col><Col id=\"y\">390</Col></Row><Row><Col id=\"id\">40</Col><Col id=\"type\">type03</Col><Col id=\"title\">N</Col><Col id=\"x\">410</Col><Col id=\"y\">430</Col></Row><Row><Col id=\"id\">41</Col><Col id=\"type\">type03</Col><Col id=\"title\">Y</Col><Col id=\"x\">670</Col><Col id=\"y\">390</Col></Row><Row><Col id=\"id\">42</Col><Col id=\"type\">type03</Col><Col id=\"title\">N</Col><Col id=\"x\">610</Col><Col id=\"y\">425</Col></Row><Row><Col id=\"id\">43</Col><Col id=\"type\">type03</Col><Col id=\"title\">After base time:Unable to cancel</Col><Col id=\"x\">920</Col><Col id=\"y\">400</Col></Row><Row><Col id=\"id\">44</Col><Col id=\"type\">type03</Col><Col id=\"title\">Before base time</Col><Col id=\"x\">850</Col><Col id=\"y\">425</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrg", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPER_ORG_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"COLLAPSE\" type=\"INT\" size=\"256\"/><Column id=\"JOB_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LEVEL\">0</Col><Col id=\"ORG_NUM\">010000</Col><Col id=\"ORG_NM\">Aaron</Col><Col id=\"UPER_ORG_NUM\">0</Col><Col id=\"COLLAPSE\">0</Col><Col id=\"EMP_NM\">Internal Medicine</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">010300</Col><Col id=\"ORG_NM\">Abraham</Col><Col id=\"UPER_ORG_NUM\">010000</Col><Col id=\"COLLAPSE\">0</Col><Col id=\"EMP_NM\">Internal Medicine</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">010301</Col><Col id=\"ORG_NM\">Adam</Col><Col id=\"UPER_ORG_NUM\">010300</Col><Col id=\"COLLAPSE\">0</Col><Col id=\"EMP_NM\">Internal Medicine</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">010200</Col><Col id=\"ORG_NM\">Sophia</Col><Col id=\"UPER_ORG_NUM\">010000</Col><Col id=\"COLLAPSE\">0</Col><Col id=\"EMP_NM\">Endocrinology</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">010201</Col><Col id=\"ORG_NM\">Silvester</Col><Col id=\"UPER_ORG_NUM\">010200</Col><Col id=\"COLLAPSE\">0</Col><Col id=\"EMP_NM\">Endocrinology</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NUM\">010202</Col><Col id=\"LEVEL\">2</Col><Col id=\"UPER_ORG_NUM\">010200</Col><Col id=\"ORG_NM\">Edward</Col><Col id=\"EMP_NM\">Endocrinology</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Edwin</Col><Col id=\"EMP_NM\">Gastroenterology</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">011200</Col><Col id=\"UPER_ORG_NUM\">010000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Gregory</Col><Col id=\"EMP_NM\">Gastroenterology</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">011201</Col><Col id=\"UPER_ORG_NUM\">011200</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Henry</Col><Col id=\"EMP_NM\">Gastroenterology</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">011202</Col><Col id=\"UPER_ORG_NUM\">011200</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Martha</Col><Col id=\"EMP_NM\">Cardiology</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">011400</Col><Col id=\"UPER_ORG_NUM\">010000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Lucy</Col><Col id=\"EMP_NM\">Cardiology</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">011401</Col><Col id=\"UPER_ORG_NUM\">011400</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Kenneth</Col><Col id=\"EMP_NM\">Cardiology</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">011402</Col><Col id=\"UPER_ORG_NUM\">011400</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">John</Col><Col id=\"EMP_NM\">Blood Tumor</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">012300</Col><Col id=\"UPER_ORG_NUM\">010000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Nicholas</Col><Col id=\"EMP_NM\">Blood Tumor</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">012301</Col><Col id=\"UPER_ORG_NUM\">012300</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Noel</Col><Col id=\"EMP_NM\">Blood Tumor</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">012302</Col><Col id=\"UPER_ORG_NUM\">012300</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Dorothy</Col><Col id=\"EMP_NM\">Surgery</Col><Col id=\"LEVEL\">0</Col><Col id=\"ORG_NUM\">020000</Col><Col id=\"UPER_ORG_NUM\">0</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Edith</Col><Col id=\"EMP_NM\">Surgery</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">021800</Col><Col id=\"UPER_ORG_NUM\">020000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Cordelia</Col><Col id=\"EMP_NM\">Surgery</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">021801</Col><Col id=\"UPER_ORG_NUM\">021800</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Catherine</Col><Col id=\"EMP_NM\">Colon and Rectal Surgery</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">020400</Col><Col id=\"UPER_ORG_NUM\">020000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Bridget</Col><Col id=\"EMP_NM\">Colon and Rectal Surgery</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">020401</Col><Col id=\"UPER_ORG_NUM\">020400</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Oliver</Col><Col id=\"EMP_NM\">Colon and Rectal Surgery</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">020402</Col><Col id=\"UPER_ORG_NUM\">020400</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Oscar</Col><Col id=\"EMP_NM\">Urology</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">020900</Col><Col id=\"UPER_ORG_NUM\">020000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Peter</Col><Col id=\"EMP_NM\">Urology</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">020901</Col><Col id=\"UPER_ORG_NUM\">020900</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Richard</Col><Col id=\"EMP_NM\">Urology</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">020902</Col><Col id=\"UPER_ORG_NUM\">020900</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Thomas</Col><Col id=\"EMP_NM\">Plastic Surgery</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">021100</Col><Col id=\"UPER_ORG_NUM\">020000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Vincent</Col><Col id=\"EMP_NM\">Plastic Surgery</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">021101</Col><Col id=\"UPER_ORG_NUM\">021100</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Vivian</Col><Col id=\"EMP_NM\">Plastic Surgery</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">021102</Col><Col id=\"UPER_ORG_NUM\">021100</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Wallace</Col><Col id=\"EMP_NM\">Otorhinolaryngology</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">021700</Col><Col id=\"UPER_ORG_NUM\">020000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Walter</Col><Col id=\"EMP_NM\">Otorhinolaryngology</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">021701</Col><Col id=\"UPER_ORG_NUM\">021700</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Issac</Col><Col id=\"EMP_NM\">Otorhinolaryngology</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">021702</Col><Col id=\"UPER_ORG_NUM\">021700</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Jacob</Col><Col id=\"EMP_NM\">Orthopedic Surgery</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">022000</Col><Col id=\"UPER_ORG_NUM\">020000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Harold</Col><Col id=\"EMP_NM\">Orthopedic Surgery</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">022001</Col><Col id=\"UPER_ORG_NUM\">022000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Irene</Col><Col id=\"EMP_NM\">Orthopedic Surgery</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">022002</Col><Col id=\"UPER_ORG_NUM\">022000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Any</Col><Col id=\"EMP_NM\">Health Medicine</Col><Col id=\"LEVEL\">0</Col><Col id=\"ORG_NUM\">000000</Col><Col id=\"UPER_ORG_NUM\">0</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Alice</Col><Col id=\"EMP_NM\">Health Medicine</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">000100</Col><Col id=\"UPER_ORG_NUM\">000000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Rebecca</Col><Col id=\"EMP_NM\">Health Medicine</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">000101</Col><Col id=\"UPER_ORG_NUM\">000100</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Rosemary</Col><Col id=\"EMP_NM\">Health Medicine</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">000102</Col><Col id=\"UPER_ORG_NUM\">000100</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Enoch</Col><Col id=\"EMP_NM\">Anatomycal Pathology</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORG_NUM\">000800</Col><Col id=\"UPER_ORG_NUM\">000000</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Evelyn</Col><Col id=\"EMP_NM\">Anatomycal Pathology</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">000801</Col><Col id=\"UPER_ORG_NUM\">000800</Col><Col id=\"JOB_NM\"/></Row><Row><Col id=\"ORG_NM\">Michael</Col><Col id=\"EMP_NM\">Anatomycal Pathology</Col><Col id=\"LEVEL\">2</Col><Col id=\"ORG_NUM\">000802</Col><Col id=\"UPER_ORG_NUM\">000800</Col><Col id=\"JOB_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDirection", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">horizontal</Col><Col id=\"value\">Horizontal</Col></Row><Row><Col id=\"code\">vertical</Col><Col id=\"value\">Vertical</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","20","121","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TEXT(\"comp.graphics\",\"Graphics\")");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.set_fittocontents("width");
            obj.getSetter("messageid").set("comp.graphics");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","72",null,"708","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("36");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("TEXT(\"comp.graphics.workflow\",\"Workflow\")");
            obj.getSetter("messageid").set("comp.graphics.workflow");
            this.Tab00.addChild(obj.name, obj);

            obj = new Graphics("Graphics00","0","53",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_background("#eeeeee");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("TEXT(\"comp.graphics.organizationchart\",\"Organization Chart\")");
            obj.getSetter("messageid").set("comp.graphics.organizationchart");
            this.Tab00.addChild(obj.name, obj);

            obj = new Graphics("Graphics00","10","40",null,null,"10","10",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_background("#eeeeee");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnZoomOut",null,"0","90","30","18",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("Zoom Out");
            obj.set_cssclass("btn_WF_basic01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnZoomIn",null,"0","90","30","118",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("Zoom In");
            obj.set_cssclass("btn_WF_basic01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Radio("rdoDirection",null,"0","230","30","214",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsDirection");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_direction("vertical");
            obj.set_text("가로정렬");
            obj.set_value("horizontal");
            obj.set_index("0");
            this.Tab00.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

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
        this.addIncludeScript("graphics.xfdl","lib::Workflow.xjs");
        this.addIncludeScript("graphics.xfdl","lib::OrganizationChart.xjs");
        this.registerScript("graphics.xfdl", function() {
        this.executeIncludeScript("lib::Workflow.xjs"); /*include "lib::Workflow.xjs"*/;
        this.executeIncludeScript("lib::OrganizationChart.xjs"); /*include "lib::OrganizationChart.xjs"*/;

        //Drag&Drop 정보를 관리할 오브젝트
        this.objDargChecker;

        this.form_onload = function(obj,e)
        {
        	//Drag 이벤트 발생시 전달할 정보 오브젝트로 만들기
        	this.objDargChecker = {
        		"x" : 0, "y" : 0,
        		"dragFlag" : false,
        		"targetObj" : null,
        		"targetReferenceObj" : null
        	};

        	this.fn_tabpage1_draw();
        	this.fn_tabpage2_draw();

        	this.gfnFormOnLoad();
        };

        this.form_onmousemove = function(obj,e)
        {
        	let objDrag = this.objDargChecker;

        	//Drag 여부값이 시작 상태일 경우
        	if (objDrag.dragFlag) {
        		let nX1, nX2, nY1, nY2, objGraphics, objPath, objSelectPath, arrId;

        		//Drag가 발생한 오브젝트 가져오기
        		objGraphics = objDrag.targetObj;
        		objPath = objDrag.targetReferenceObj;
        		objSelectPath = objGraphics.selectPath;

        		//Drag 시작 X/Y좌표
        		nX1 = objDrag.x;
        		nY1 = objDrag.y;

        		//현재 X/Y좌표
        		nX2 = e.screenx;
        		nY2 = e.screeny;

        		if (this.Tab00.tabindex == 0) {
        			this.gfnMoveWorkFlow(objGraphics, nX1, nX2, nY1, nY2);
        		} else if (this.Tab00.tabindex == 1) {
        			this.gfnMoveOrganizationChart(objGraphics, nX1, nX2, nY1, nY2);
        		}
        	}
        };

        this.form_onmousewheel = function(obj,e)
        {
        	//Graphics 컴포넌트에서 마우스 휠 이벤트가 발생했을 경우
        	if (e.fromreferenceobject instanceof nexacro.Graphics) {
        		//Graphics 컴포넌트 가져오기
        		let objTargetGraphics = e.fromreferenceobject;

        		//위로 올렸을 경우
        		if (e.amount > 0) {
        			//줌처리 함수 호출(Zoom In)
        			this.gfnZoomOrganization(objTargetGraphics, 1.1, e.clientx, e.clienty)
        		}
        		//아래로 내렸을 경우
        		else if(e.amount<0) {
        			//줌처리 함수 호출(Zoom Out)
        			this.gfnZoomOrganization(objTargetGraphics, 0.9, e.clientx, e.clienty)
        		}
        	}
        };

        this.Tab00_Tabpage1_Graphics00_onlbuttondown = function(obj,e)
        {
        	let objDrag = this.objDargChecker;
        	let objPath = obj.hitTest(e.canvasx, e.canvasy);
        	let arrId, sTargetId, objTargetPath;

        	//Drag 여부값 설정(드래그 시작)
        	objDrag.dragFlag = true;

        	//클릭된 좌표값 설정
        	objDrag.x = e.screenx;
        	objDrag.y = e.screeny;

        	//클릭된 컴포넌트 설정
        	objDrag.targetObj = obj;
        	objDrag.targetReferenceObj = objPath;

        	//조직도 오브젝트들을 관리하는 그룹 오브젝트 가져오기
        	objBoard = obj.getObjectByID("board");

        	//그룹오브젝트가 존재할 경우
        	if (objBoard) {
        		//현재 x, y좌표값을 orgX, orgY에 저장
        		//DragMove시 기준좌표로 사용하기 위함
        		objBoard.orgX = objBoard.x;
        		objBoard.orgY = objBoard.y;
        	}
        };

        this.Tab00_Tabpage1_Graphics00_onlbuttonup = function(obj,e)
        {
        	//Drag 여부값 설정(드래그 종료)
        	this.objDargChecker.dragFlag = false;
        };


        this.fn_tabpage1_draw = function ()
        {
        	let objConfig = {
        		//노드 데이터셋
        		"itemsDs" : this.dsItems,
        		//연결선 데이터셋
        		"linesDs" : this.dsLines,

        		//노드 포멧 정보 01
        		"type01" : {
        			"x" : 0, "y" : 0,
        			"width" : 140, "height" : 30,
        			"fillstyle" : "#8547FE",
        			title : {
        				"font" : 'bold 9px/normal "Arial","Malgun Gothic","Gulim',
        				"color" : "#ffffff",
        				"textAlign" : "center",
        				"verticalAlign" : "middle",
        			}
        		},

        		//노드 포멧 정보 02
        		"type02" : {
        			"x" : 0, "y" : 0,
        			"width" : 140, "height" : 30,
        			"radiusx" : 70, "radiusy" : 15,
        			"fillstyle" : "#8547FE",
        			title : {
        				"font" : 'bold 9px/normal "Arial","Malgun Gothic","Gulim',
        				"color" : "#ffffff",
        				"textAlign" : "center",
        				"verticalAlign" : "middle",
        			}
        		},

        		//노드 포멧 정보 03
        		"type03" : {
        			"x" : 0, "y" : 0,
        			"width" : 140, "height" : 30,
        			title : {
        				"font" : 'bold 9px/normal "Arial","Malgun Gothic","Gulim',
        				"color" : "#000000",
        				"textAlign" : "center",
        				"verticalAlign" : "middle",
        			}
        		},
        		//연결선 정보
        		"line" : {
        			"fillstyle" : "#8547FE",
        			"strokepen" : "1px solid #8547FE",
        			"capwidth" : 10, "capheight" : 10
        		}
        	};

        	//워크플로우 그리기 함수 호출
        	this.gfnDrawWorkFlow(this.Tab00.Tabpage1.form.Graphics00, objConfig);
        };

        this.Tab00_Tabpage2_btnZoomIn_onclick = function(obj,e)
        {
        	//줌처리 함수 호출(Zoom In)
        	this.gfnZoomOrganization(this.Tab00.Tabpage2.form.Graphics00, 1.1);
        };

        this.Tab00_Tabpage2_btnZoomOut_onclick = function(obj,e)
        {
        	//줌처리 함수 호출(Zoom Out)
        	this.gfnZoomOrganization(this.Tab00.Tabpage2.form.Graphics00, 0.9);
        };

        this.fn_tabpage2_draw = function ()
        {
        	//조직도 정렬 방향 설정 값 가져오기
        	let sDirection = this.Tab00.Tabpage2.form.rdoDirection.value;

        	//조직도 설정값 만들기
        	let objConfig = {
        						"targetDs" : this.dsOrg,
        						"direction" : sDirection,
        						"nodeWidth" : 100,
        						"nodeHeight" : 50,
        						"margin" : { "x" : 10, "y" : 10},
        						"point" : { "x" : 0, "y" : 0},
        						"zoomlevel" : 0
        					}

        	//조직도 초기화 설정 함수 호출
        	this.gfninitOrganization(this.Tab00.Tabpage2.form.Graphics00, objConfig);

        	//조직도 그리기 함수 호출
        	this.gfnDrawOrganization(this.Tab00.Tabpage2.form.Graphics00);
        };

        this.Tab00_Tabpage2_Graphics00_onlbuttondown = function(obj,e)
        {
        	let objBoard, objPath, objDrag = this.objDargChecker;

        	//Drag 여부값 설정(드래그 시작)
        	objDrag.dragFlag = true;

        	//클릭된 좌표값 설정
        	objDrag.x = e.screenx;
        	objDrag.y = e.screeny;

        	//클릭된 컴포넌트 설정
        	objDrag.targetObj = obj;

        	//조직도 오브젝트들을 관리하는 그룹 오브젝트 가져오기
        	objBoard = obj.getObjectByID("board");

        	//그룹오브젝트가 존재할 경우
        	if (objBoard) {
        		//현재 x, y좌표값을 orgX, orgY에 저장
        		//DragMove시 기준좌표로 사용하기 위함
        		objBoard.orgX = objBoard.x;
        		objBoard.orgY = objBoard.y;
        	}

        	//클릭된 오브젝트 가져오기
        	objPath = obj.hitTest(e.clientx, e.clienty);

        	//클릭된 오브젝트가 접기/펼치기 버튼일 경우
        	if (objPath && objPath.id == "btnExpand") {
        		//하위노드 접기/펼치기 함수 호출
        		this.gfnShowChildNode(obj, objPath);
        	}
        };

        this.Tab00_Tabpage2_Graphics00_onlbuttonup = function(obj,e)
        {
        	//Drag 여부값 설정(드래그 종료)
        	this.objDargChecker.dragFlag = false;
        };
        this.Tab00_Tabpage2_rdoDirection_onitemchanged = function(obj,e)
        {
        	this.fn_tabpage2_draw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("onmousemove",this.form_onmousemove,this);
            this.addEventHandler("onmousewheel",this.form_onmousewheel,this);
            this.Tab00.Tabpage1.form.Graphics00.addEventHandler("onlbuttondown",this.Tab00_Tabpage1_Graphics00_onlbuttondown,this);
            this.Tab00.Tabpage1.form.Graphics00.addEventHandler("onlbuttonup",this.Tab00_Tabpage1_Graphics00_onlbuttonup,this);
            this.Tab00.Tabpage2.form.Graphics00.addEventHandler("onlbuttondown",this.Tab00_Tabpage2_Graphics00_onlbuttondown,this);
            this.Tab00.Tabpage2.form.Graphics00.addEventHandler("onlbuttonup",this.Tab00_Tabpage2_Graphics00_onlbuttonup,this);
            this.Tab00.Tabpage2.form.btnZoomOut.addEventHandler("onclick",this.Tab00_Tabpage2_btnZoomOut_onclick,this);
            this.Tab00.Tabpage2.form.btnZoomIn.addEventHandler("onclick",this.Tab00_Tabpage2_btnZoomIn_onclick,this);
            this.Tab00.Tabpage2.form.rdoDirection.addEventHandler("onitemchanged",this.Tab00_Tabpage2_rdoDirection_onitemchanged,this);
        };
        this.loadIncludeScript("graphics.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
