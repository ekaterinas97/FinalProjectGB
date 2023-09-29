import React from "react";
import PropTypes from "prop-types";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import {
    setRequirementsInput,
    setRequirementsList,
} from "../../model/slice/vacancyPageUpdateSlice";
import s from "../VacancyPageUpdate/VacancyPageUpdate.module.css";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
function VacancyCreateRequirements(props) {
    const dispatch = useDispatch();
    const { requirementsInput, requirementsList } = useSelector(
        (state) => state.vacancyPageCreate
    );
    return (
        <div className={cn(s.requirements, s.item)}>
            {requirementsList ? (
                <div className={s.requirementsList}>
                    {requirementsList?.map((requireItem, index) => {
                        return (
                            <div className={s.listItem} key={index}>
                                <div> {requireItem}</div>
                                <AppButton
                                    sizeText={"xs"}
                                    variant={"clear"}
                                    colorType={"cancel"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        requirementsList.splice(index, 1);
                                        const newRequirementsList = [
                                            ...requirementsList,
                                        ];
                                        console.log(
                                            "newRequirementsList",
                                            newRequirementsList
                                        );
                                        dispatch(
                                            setRequirementsList([
                                                ...newRequirementsList,
                                            ])
                                        );
                                    }}
                                >
                                    Удалить
                                </AppButton>
                            </div>
                        );
                    })}
                </div>
            ) : null}
            <AppInput
                label="Требования к соискателю"
                value={requirementsInput}
                onChange={(e) => {
                    dispatch(setRequirementsInput(e.target.value));
                }}
            />

            <AppButton
                variant="clear"
                colorType="hint"
                sizeText="s"
                onClick={(e) => {
                    e.preventDefault();
                    if (requirementsInput) {
                        dispatch(
                            setRequirementsList([
                                ...requirementsList,
                                requirementsInput,
                            ])
                        );
                    }

                    dispatch(setRequirementsInput(""));
                }}
            >
                Добавить требование
            </AppButton>
        </div>
    );
}

VacancyCreateRequirements.propTypes = {};

export default VacancyCreateRequirements;