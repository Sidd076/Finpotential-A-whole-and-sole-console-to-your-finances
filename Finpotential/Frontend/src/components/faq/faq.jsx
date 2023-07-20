import React from 'react';

import './faq.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function FAQPage() {
  return (
    <>
      <h2>Frequently Asked Questions</h2>
      <hr/>
      <div style={{ visibility: 'hidden', position: 'absolute', width: '0px', height: '0px' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol viewBox="0 0 24 24" id="expand-more">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path d="M0 0h24v24H0z" fill="none"/>
          </symbol>
          <symbol viewBox="0 0 24 24" id="close">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/>
          </symbol>
        </svg>
      </div>

      <details open>
        <summary>
        What is financial planning?
          <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
          <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
        </summary>
        <p>Put simply,Financial planning is the process of evaluating your current situation ,and then preparing and executing a roadmap for a better financial future! A qualified financial consultant can combine investment planning and financial planning to ensure that you meet your important goals by investing systematically and following correct investing behaviours.</p>
      </details>

      <details>
        <summary>
        What services do you offer?
          <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
          <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
        </summary>
        <p>We offer financial services which include consulting, financial planning,taxing, insurance, and retirement plan.
</p>
      </details>

      <details>
        <summary>
        What services do you offer?
          <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
          <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
        </summary>
        <p>As per SEBI guidelines, if you are engaging with a Personal financial planner (registered with SEBI), there should not be any conflict of interest.
</p>
      </details>

      <details>
        <summary>
        What is the main objective of financial planning?What services do you offer?
          <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
          <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
        </summary>
        <p>The main objective of financial planning is to ensure that you meet your future financial goals without compromising on your lifestyle or facing undue stress! By helping you manage your cash flows smartly and stick to your investment plan with discipline, financial planning ensures a better financial future for you and your family.
</p>
      </details>

      <details>
        <summary>
        What is the role of an investment advisor in the financial planning process? 
          <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
          <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
        </summary>
        <p>The investment advisor or financial consultant plays a vital role in the financial planning process! In the long run, “how you invest” matters a lot more than “where you invest”. Even the best investment planning processes fail to deliver results if the “human element” is not managed properly. The investment advisor doesn’t just recommend the best investment plans or suggest market related portfolio changes – she also plays the role of counsellor or behavioural coach to ensure that you remain steadfast on your financial planning journey.
</p>
      </details>

      <details>
        <summary>
        How does technology improve the financial planning experience?
          <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
          <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
        </summary>
        <p>Fantastic technology serves as a critical enabler for the financial planning process. A financial consultant with access to great tech to track and monitor your progress, will be better equipped to seamlessly implement critical investment planning changes from time to time. In a nutshell, technology ensures the continuity of your financial planning journey, so that it doesn’t just remain a one-time conversation with a financial consultant, but translates into tangible long term outcomes.
</p>
      </details>


      <details>
        <summary>
        What are the things to keep in mind with respect to financial planning?
          <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
          <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
        </summary>
        <p>Fantastic technology serves as a critical enabler for the financial planning process. A financial consultant with access to great tech to track and monitor your progress, will be better equipped to seamlessly implement critical investment planning changes from time to time. In a nutshell, technology ensures the continuity of your financial planning journey, so that it doesn’t just remain a one-time conversation with a financial consultant, but translates into tangible long term outcomes!
</p>
      </details>

      <details>
        <summary>
        How Do I Know Which Investment Strategy Makes the Most Sense for Me?
          <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
          <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
        </summary>
        <p>There are many factors that affect choosing an investment strategy. The first set of factors begins with you, our client. Our disciplined discovery process is key to understanding the right investment strategy for your specific situation. Once we have the answers from our clients, we begin to think about the second category of factors which involve the overall health of the economy.
</p>
      </details>

      <details>
        <summary>
         What is your comfort level with investing, or how much investment expertise do you have?

          <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
          <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
        </summary>
        <p>The initial discovery process has to be thorough, which is why top financial advisors will include financial planning, not just investment management, as part of the services they provide to their clients. At our firm, we believe all of our clients should have a financial plan, which is why we view it as the skeleton of the process.Once we get to know our clients and we have walked through the basics, we decide whether we need to create the asset allocation plan or simply find the spot in which the funds we are going to invest fit within an already established plan.
</p>
      </details>

      <details>
        <summary>
        How much Emergency Fund do I need Post-Retirement?
          <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
          <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
        </summary>
        <p>Once you retire from your job, you won’t get your regular monthly income. But at the same time, your monthly expenses will remain the same and increase year by year. A financial planner will advise you to have an emergency fund equivalent to 3 – 6 months of your monthly expenses to cover your unexpected or sudden need for money like in case of a serious health problem or any important family expense. You can also save money for the predictable health care expenses like cataract operation, dialysis, etc in your emergency fund.
</p>
      </details>

      <details>
        <summary>
        How much of corpus do I need?
          <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#expand-more" /></svg>
          <svg className="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg>
        </summary>
        <p>Corpus is the capital – wealth of a person in the form of money or property. Your financial planner will calculate the corpus based on your current age, expected retirement age, life expectancy, current monthly expenses, expected inflation, expected return on investment, and expected retirement expenses including healthcare expenses.
</p>
      </details>
    </>
  );
}

export default FAQPage;
