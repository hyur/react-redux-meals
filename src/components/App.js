import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { addRecipe, removeFromCalendar } from "../actions/index";
import CalendarIcon from "react-icons/lib/fa/calendar-plus-o";
import ArrowRightIcon from "react-icons/lib/fa/arrow-circle-right";
import { capitalize } from "../utils/helper";
import Modal from "react-modal";
import Loading from "react-loading";
import { fetchRecipes } from "../utils/api";
import FoodList from "./FoodList";
import ShoppingList from "./ShoppingList";

class App extends Component {
  state = {
    foodModalOpen: false,
    loadingFood: false,
    meal: null,
    day: null,
    food: null,
    ingredientsModalOpen: false
  };
  componentWillMount() {
    Modal.setAppElement("body");
  }
  //打开食物模板
  openFoodModal = ({ meal, day }) => {
    this.setState({
      foodModalOpen: true,
      meal,
      day
    });
  };
  // 关闭食物模板
  closeFoodModal = () => {
    this.setState({
      foodModalOpen: false,
      meal: null,
      day: null,
      food: null
    });
  };
  // 查找食物
  searchFood = e => {
    if (!this.input.value) {
      return;
    }
    e.preventDefault();
    this.setState({ loadingFood: true });
    fetchRecipes(this.input.value).then(food =>
      this.setState({ food, loadingFood: false })
    );
  };
  // 打开成分模板
  openIngredientsModal = () => {
    this.setState({ ingredientsModalOpen: true });
  };
  // 关闭成分模板
  closeIngredientsModal = () => {
    this.setState({ ingredientsModalOpen: false });
  };
  // 生成成分模板
  generateShoppingList = () => {
    return this.props.calendar
      .reduce((result, { meals }) => {
        const { breakfast, lunch, dinner } = meals;
        breakfast && result.push(breakfast);
        lunch && result.push(lunch);
        dinner && result.push(dinner);
        return result;
      }, [])
      .reduce((ings, { ingredientLines }) => ings.concat(ingredientLines), []);
  };
  render() {
    const { calendar, selectRecipe, remove } = this.props;
    const { foodModalOpen, food, loadingFood,ingredientsModalOpen } = this.state;
    const mealOrder = ["breakfast", "lunch", "dinner"];

    return (
      <div className="container">
        <div className="nav">
          <h1 className="header">Meals</h1>
          <button className="shopping-list" onClick={this.openIngredientsModal}>
            Shopping List
          </button>
        </div>
        <ul className="meal-types">
          {mealOrder.map(mealType => (
            <li key={mealType} className="subheader">
              {capitalize(mealType)}
            </li>
          ))}
        </ul>
        <div className="calendar">
          <div className="days">
            {calendar.map(({ day }) => (
              <h3 key={day} className="subheader">
                {capitalize(day)}
              </h3>
            ))}
          </div>
          <div className="icon-grid">
            {calendar.map(({ day, meals }) => (
              <ul key={day}>
                {mealOrder.map(meal => (
                  <li key={meal} className="meal">
                    {meals[meal] ? (
                      <div className="food-item">
                        <img src={meals[meal].image} alt={meals[meal].label} />
                        <button onClick={() => remove({ meal, day })}>
                          Clear
                        </button>
                      </div>
                    ) : (
                      <div
                        className="icon-btn"
                        onClick={() => {
                          this.openFoodModal({ meal, day });
                        }}
                      >
                        <CalendarIcon size={30} />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        {/* 查找食物模板页 */}
        <Modal
          className="modal"
          overlayClassName="overlay"
          isOpen={foodModalOpen}
          onRequestClose={this.closeFoodModal}
          contentLabel="Modal"
        >
          <div>
            {loadingFood === true ? (
              <Loading
                delay={200}
                type="spin"
                color="#222"
                className="loading"
              />
            ) : (
              <div className="search-container">
                <h3 className="subheader">
                  Find a meal for {capitalize(this.state.day)} {this.state.meal}
                </h3>
                <div className="search">
                  <input
                    className="food-input"
                    type="text"
                    placeholder="Search Foods"
                    ref={input => (this.input = input)}
                  />
                  <button className="icon-btn" onClick={this.searchFood}>
                    <ArrowRightIcon size={30} />
                  </button>
                </div>
                {food !== null && (
                  <FoodList
                    food={food}
                    onSelect={recipe => {
                      selectRecipe({
                        recipe,
                        day: this.state.day,
                        meal: this.state.meal
                      });
                      this.closeFoodModal();
                    }}
                  />
                )}
              </div>
            )}
          </div>
        </Modal>
        <Modal
          className="modal"
          overlayClassName="overlay"
          isOpen={ingredientsModalOpen}
          onRequestClose={this.closeIngredientsModal}
          contentLabel="Modal"
        >
          {ingredientsModalOpen && (
            <ShoppingList list={this.generateShoppingList()} />
          )}
        </Modal>
      </div>
    );
  }
}

/**
 * 参数：当前store和当前属性的函数（可选）
 * 返回：一个纯对象，并与组件的属性合并。
 * @param {*} calendar
 * 如果指定了该参数，新组件将订阅Redux store更新。这意味着任何时候store被更新了，mapStateToProp将被调用。
 * mapStateToProp的结果必须是纯对象，并与组件的属性合并。
 */
function mapStateToProps({ calendar, food }) {
  const dayOrder = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];
  return {
    calendar: dayOrder.map(day => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal] ? food[calendar[day][meal]] : null;
        return meals;
      }, {})
    }))
  };
}
/**
 *
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: data => dispatch(addRecipe(data)),
    remove: data => dispatch(removeFromCalendar(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
